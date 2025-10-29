import db from "#db/client";

/** @returns all licenses */
export async function getLicenses() {
  const sql = `
  SELECT *
  FROM licenses
  `;
  const { rows: licenses } = await db.query(sql);
  return licenses;
}

/** @returns all licenses with their persons attached */
export async function getLicensesIncludingPerson() {
  // TODO
}

/** @returns the license specified by id */
export async function getLicenseById(id) {
  const sql = `
  SELECT *
  FROM licenses
  WHERE id = $1
  `;
  const {
    rows: [license],
  } = await db.query(sql, [id]);
  return license;
}

/** @returns the license specified by id with its person attached */
export async function getLicenseByIdIncludingPerson(id) {
  // TODO
}

/**
 * @returns the license specified by the person's id
 * @returns undefined if the person does not have a license
 */
export async function getLicenseByPersonId(id) {
  // TODO
}
