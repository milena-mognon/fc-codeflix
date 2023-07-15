import { Category } from "./category";

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
});
