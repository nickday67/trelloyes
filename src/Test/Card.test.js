it("renders the UI as expected", () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={4} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
