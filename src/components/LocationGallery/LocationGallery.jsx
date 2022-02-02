export default function Gallery({ list }) {
    return (
      <div>
        {list.map((item) => (
          <figure key={item.id}>
            <img src="https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg" alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  