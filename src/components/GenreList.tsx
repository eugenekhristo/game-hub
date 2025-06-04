import useData from '@/hooks/useData';
import { type Genre } from '@/hooks/useGenres';

function GenreList() {
  const { data: genres } = useData<Genre>('/genres');

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.name}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
