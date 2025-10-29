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
    try {
    const sql = `
      SELECT licenses.*,
      (
      SELECT to_json(persons)
      FROM persons
      WHERE persons.id = licenses.person_id
      ) AS person
       FROM licenses
    `;
    const { rows: licenses } = await db.query(sql);
    return licenses;
  } catch (error) {
    console.error("Error fetching licenses including person:", error);
  }
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
  try {
    const sql = `
      SELECT licenses.*,
      (
        SELECT to_json(persons)
        FROM persons
        WHERE persons.id = licenses.person_id
      ) AS person
       FROM licenses
       WHERE id = $1
    `;
    const { rows: [license], 
    } = await db.query(sql, [id])
    return license;
  } catch (error) {
    console.error("Error fetching licenses including person:", error);
  }
}

/**
 * @returns the license specified by the person's id
 * @returns undefined if the person does not have a license
 */
export async function getLicenseByPersonId(id) {
  // TODO
  try {
    const sql = `
      SELECT * 
      FROM licenses
      WHERE person_id = $1
    `;
    const { 
      rows: [license],
    } = await db.query(sql, [id]);
    return license;
  } catch (error) {
    console.error("Error fetching license by person id", id, error);
  }
}
