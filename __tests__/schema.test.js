import { afterAll, beforeAll, describe, expect, it, test } from "vitest";

import db from "#db/client";

beforeAll(async () => {
  await db.connect();
});
afterAll(async () => {
  await db.end();
});

describe('"persons" table', () => {
  it("is created", async () => {
    const sql = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_name = 'persons'
    `;
    const { rows } = await db.query(sql);
    expect(rows.length).toBe(1);
  });

  describe("columns", () => {
    let columns;

    beforeAll(async () => {
      const sql = `
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'persons'
      `;
      const { rows } = await db.query(sql);
      columns = rows;
    });

    test('"id" exists, is type serial, and is not nullable', () => {
      const id = columns.find((column) => column.column_name === "id");
      expect(id).toBeDefined();
      expect(id.data_type).toBe("integer");
      expect(id.is_nullable).toBe("NO");
      expect(id.column_default.startsWith("nextval")).toBe(true);
    });

    test('"first_name" exists, is type text, and is not nullable', () => {
      const name = columns.find(
        (column) => column.column_name === "first_name",
      );
      expect(name).toBeDefined();
      expect(name.data_type).toBe("text");
      expect(name.is_nullable).toBe("NO");
    });

    test('"last_name" exists, is type text, and is not nullable', () => {
      const name = columns.find((column) => column.column_name === "last_name");
      expect(name).toBeDefined();
      expect(name.data_type).toBe("text");
      expect(name.is_nullable).toBe("NO");
    });
  });
});

describe('"licenses" table', () => {
  it("is created", async () => {
    const sql = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_name = 'licenses'
    `;
    const { rows } = await db.query(sql);
    expect(rows.length).toBe(1);
  });

  describe("columns", () => {
    let columns;

    beforeAll(async () => {
      const sql = `
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'licenses'
      `;
      const { rows } = await db.query(sql);
      columns = rows;
    });

    test('"id" exists, is type serial, and is not nullable', () => {
      const id = columns.find((column) => column.column_name === "id");
      expect(id).toBeDefined();
      expect(id.data_type).toBe("integer");
      expect(id.is_nullable).toBe("NO");
      expect(id.column_default.startsWith("nextval")).toBe(true);
    });

    test('"address" exists, is type text, and is not nullable', () => {
      const name = columns.find((column) => column.column_name === "address");
      expect(name).toBeDefined();
      expect(name.data_type).toBe("text");
      expect(name.is_nullable).toBe("NO");
    });

    test('"eye_color" exists, is type text, and is not nullable', () => {
      const name = columns.find((column) => column.column_name === "eye_color");
      expect(name).toBeDefined();
      expect(name.data_type).toBe("text");
      expect(name.is_nullable).toBe("NO");
    });

    test('"date_of_birth" exists, is type date, and is not nullable', () => {
      const name = columns.find(
        (column) => column.column_name === "date_of_birth",
      );
      expect(name).toBeDefined();
      expect(name.data_type).toBe("date");
      expect(name.is_nullable).toBe("NO");
    });

    describe('"person_id"', () => {
      it("exists, is type integer, and is not nullable", () => {
        const name = columns.find(
          (column) => column.column_name === "person_id",
        );
        expect(name).toBeDefined();
        expect(name.data_type).toBe("integer");
        expect(name.is_nullable).toBe("NO");
      });

      it("has a UNIQUE constraint", async () => {
        const sql = `
        SELECT *
        FROM
          information_schema.table_constraints AS tc
          JOIN information_schema.constraint_column_usage AS ccu
            ON tc.constraint_name = ccu.constraint_name
          JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
        WHERE
          tc.table_name = 'licenses'
          AND tc.constraint_type = 'UNIQUE'
          AND kcu.column_name = 'person_id'
        `;
        const { rows } = await db.query(sql);
        expect(rows.length).toBe(1);
      });

      it('references the "id" column of the "persons" table', async () => {
        const sql = `
        SELECT *
        FROM
          information_schema.table_constraints AS tc
          JOIN information_schema.constraint_column_usage AS ccu
            ON tc.constraint_name = ccu.constraint_name
          JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
        WHERE
          tc.table_name = 'licenses'
          AND kcu.column_name = 'person_id'
          AND tc.constraint_type = 'FOREIGN KEY'
          AND ccu.table_name = 'persons'
          AND ccu.column_name = 'id'
        `;
        const { rows } = await db.query(sql);
        expect(rows.length).toBe(1);
      });
    });
  });
});
