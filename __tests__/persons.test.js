import { afterAll, beforeAll, describe, expect, it, test } from "vitest";

import db from "#db/client";
import {
  getPersonByIdIncludingLicense,
  getPersonsWithoutLicense,
} from "#db/queries/persons";

beforeAll(async () => {
  await db.connect();
});
afterAll(async () => {
  await db.end();
});

test("getPersonsWithoutLicense() returns all persons who do not have a license", async () => {
  const sql = `
  SELECT
    persons.*
  FROM
    persons
    LEFT JOIN licenses ON persons.id = licenses.person_id
  WHERE
    licenses.id IS NULL
  `;
  const { rows: expected } = await db.query(sql);

  const result = await getPersonsWithoutLicense();
  expect(result.length).toEqual(expected.length);
  expect(result).toEqual(expect.arrayContaining(expected));
});

describe("getPersonByIdIncludingLicense()", () => {
  it("returns a person with their license included if they have one", async () => {
    const person = await getPersonByIdIncludingLicense(1);
    expect(person).toHaveProperty("license");
    expect(person.license).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        address: expect.any(String),
        eye_color: expect.any(String),
        date_of_birth: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
        person_id: 1,
      }),
    );
  });

  it("returns a person with a null license if they do not have one", async () => {
    const person = await getPersonByIdIncludingLicense(2);
    expect(person).toHaveProperty("license");
    expect(person.license).toBe(null);
  });
});
