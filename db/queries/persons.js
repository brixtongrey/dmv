import db from "#db/client";

/** @returns all persons */
export async function getPersons() {
  const sql = `
  SELECT *
  FROM persons
  `;
  const { rows: persons } = await db.query(sql);
  return persons;
}

/** @returns all persons for which a license exists */
export async function getPersonsWithLicense() {
  const sql = `
  SELECT persons.*
  FROM
    persons
    JOIN licenses ON persons.id = licenses.person_id
  `;
  const { rows: persons } = await db.query(sql);
  return persons;
}

/** @returns all persons who do not have a license */
export async function getPersonsWithoutLicense() {
  // TODO
  try {
    const sql = `
    SELECT persons.* 
    FROM persons
    LEFT JOIN licenses ON persons.id = licenses.person_id
    WHERE licenses.id IS NULL;
    `;
    const {rows: persons} = await db.query(sql);
    return persons;
  } catch (error) {
    console.error(`Error fetching person without license: ${error}`);
    throw error;
  }
}

/** @returns all persons with their license attached if they have one */
export async function getPersonsIncludingLicense() {
  const sql = `
  SELECT
    *,
    (
      SELECT to_json(licenses)
      FROM licenses
      WHERE licenses.person_id = persons.id
    ) AS license
  FROM persons
  `;
  const { rows: persons } = await db.query(sql);
  return persons;
}

/** @returns a person specified by id */
export async function getPersonById(id) {
  const sql = `
  SELECT *
  FROM persons
  WHERE id = $1
  `;
  const {
    rows: [person],
  } = await db.query(sql, [id]);
  return person;
}

/** @returns a person specified by id
 * Their license is included if they have one.
 */
export async function getPersonByIdIncludingLicense(id) {
  // TODO
}
