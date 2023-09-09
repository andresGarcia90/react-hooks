import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getHerosByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPages = () => {
  const { searchText, onInputChange } = useForm({ searchText: '' });

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHerosByName(q);

  const showSearch = q === '';
  const showError = q !== '' && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) {
      return;
    }
    navigate(`?q=${searchText.toLowerCase()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching </h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Search a Hero"
              name="searchText"
              autoCapitalize="off"
              className="form-control mb-2"
              onChange={onInputChange}
            />
            <button className="btn btn-primary" onClick={onSearchSubmit}>
              Search{' '}
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {showSearch && (
            <div className="alert alert-primary">Search a Hero</div>
          )}
          {showError && (
            <div className="alert alert-danger">
              Not Hero found <b>{q}</b>
            </div>
          )}
          <div>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
