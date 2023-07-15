import { Category } from "./category";
import { omit } from "lodash";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    // Triple A - Três etapas de um teste -- Arrange - Act - Assert

    // Arrange
    const categoryProps = {
      name: "Movie",
      description: "Movie Category Description",
      is_active: true,
      created_at: new Date(),
    };

    //  Act
    const category = new Category(categoryProps);

    // Assert
    // toBe - compara apenas valores
    expect(category.name).toBe(categoryProps.name);
    expect(category.description).toBe(categoryProps.description);
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBe(categoryProps.created_at);

    // toMatchObject - compara objetos de forma parcial
    // toStrictEqual - compara propriedades e valores, precisa ser exatamente igual
    expect(category.props).toStrictEqual(categoryProps);
  });

  test("constructor of category - setters", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });
    props = omit(category.props, "created_at");
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: "Movie 1",
      description: "some description 1",
    });
    props = omit(category.props, "created_at");
    expect(category.props).toMatchObject({
      name: "Movie 1",
      description: "some description 1",
    });

    category = new Category({
      name: "Movie 2",
      is_active: true,
    });
    props = omit(category.props, "created_at");
    expect(category.props).toMatchObject({
      name: "Movie 2",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie 3",
      created_at,
    });
    props = omit(category.props, "created_at");
    expect(category.props).toMatchObject({
      name: "Movie 3",
      created_at,
    });
  });
});
