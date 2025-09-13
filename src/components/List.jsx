function List() {
  const items = [1, 2, 3, 4, 5];
  return (
    <ul>
      {items.map(item => (
        <li key={item}>Item {item}</li>
      ))}
    </ul>
  );
}

export default List;
