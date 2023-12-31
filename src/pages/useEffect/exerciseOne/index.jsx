import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import Loading from '@/components/loadings';
const ExerciseOneEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const handleFetchApi = async (param) => {
    setLoading(true);
    try {
      const rs = await axios.get(`https://jsonplaceholder.typicode.com/${param}`);
      setData(rs.data);
      setLoading(false);
    } catch (error) {
      setError('Khong lay duoc data');
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchApi('users');
  }, []);

  const handeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtereData = data
    .sort((a, b) => {
      const nameA = (a.name || '').toLowerCase(); // Đảm bảo a.name có giá trị
      const nameB = (b.name || '').toLowerCase(); // Đảm bảo b.name có giá trị
      const titleA = (a.title || '').toLowerCase(); // Đảm bảo a.title có giá trị
      const titleB = (b.title || '').toLowerCase(); // Đảm bảo b.title có giá trị
      // Sắp xếp theo tên (a đến z)
      const nameComparison = nameA.localeCompare(nameB);
      if (nameComparison === 0) {
        // Nếu tên bằng nhau, thì sắp xếp theo title (a đến z)
        return titleA.localeCompare(titleB);
      }
      return nameComparison;
    })
    .filter((item) => {
      const searchValue = (search || '').toLowerCase(); // Đảm bảo search có giá trị
      const nameMatch = (item.name || '').toLowerCase().includes(searchValue);
      const titleMatch = (item.title || '').toLowerCase().includes(searchValue);
      return nameMatch || titleMatch;
    });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <input
        className="inputform"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handeSearch}
      />
      <br />
      <button onClick={() => handleFetchApi('users')}> Users </button>
      <button onClick={() => handleFetchApi('comments')}> Comments </button>
      <button onClick={() => handleFetchApi('posts')}> Posts</button>
      <button onClick={() => handleFetchApi('todos')}> Todos</button>
      <button onClick={() => handleFetchApi('albums')}> albums</button>
      <ul className="A">
        {filtereData.map((item) => (
          <li className="B" key={item.id}>
            {item.name || item.title}{' '}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExerciseOneEffect;
