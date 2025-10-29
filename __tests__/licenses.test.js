import { afterAll, beforeAll, describe, expect, it, test } from "vitest";

import db from "#db/client";
import {
  getLicenseByIdIncludingPerson,
  getLicenseByPersonId,
  getLicensesIncludingPerson,
} from "#db/queries/licenses";

beforeAll(async () => {
  await db.connect();
});
afterAll(async () => {
  await db.end();
});

test("getLicensesIncludingPerson returns all licenses with their persons attached", async () => {
  const sql = `
  SELECT
    *,
    (
      SELECT to_json(persons)
      FROM persons
      WHERE persons.id = licenses.person_id
    ) AS person
  FROM licenses
  `;
  const { rows: expected } = await db.query(sql);

  const result = await getLicensesIncludingPerson();
  expect(result).toEqual(expected);
});

test("getLicenseByIdIncludingPerson returns the license specified by id with its person attached", async () => {
  const id = 1;
  const sql = `
  SELECT
    *,
    (
      SELECT to_json(persons)
      FROM persons
      WHERE persons.id = licenses.person_id
    ) AS person
  FROM licenses
  WHERE id = $1
  `;
  const {
    rows: [expected],
  } = await db.query(sql, [id]);

  const result = await getLicenseByIdIncludingPerson(id);
  expect(result).toEqual(expected);
});

describe("getLicenseByPersonId", () => {
  it("returns the license specified by the person's id", async () => {
    const id = 1;
    const sql = `
    SELECT *
    FROM licenses
    WHERE person_id = $1
    `;
    const {
      rows: [expected],
    } = await db.query(sql, [id]);

    const result = await getLicenseByPersonId(id);
    expect(result).toEqual(expected);
  });

  it("returns undefined if the person does not have a license", async () => {
    const result = await getLicenseByPersonId(2);
    expect(result).toBeUndefined();
  });
});
