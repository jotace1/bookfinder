import React, {useState} from 'react';
import Header from '../../components/Header';
import BookItem from '../../components/BookItem';
import api from '../../services/api';
import './styles.css';

const Dashboard = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [searchType, setSearchType] = useState('');    


    

    async function handleSearchBooks(event){
        event.preventDefault();

        let formatedSearch = search;

        if(search.includes(' ')){
          formatedSearch = search.replace(' ', '+');        
        }
        
        try {
            
            const response = await api.get(`?q=${formatedSearch}`);
            console.log(response.data.items);
            setBooks(response.data.items);
            
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
        <Header />
        <div className="container">
            <form onSubmit={handleSearchBooks}>
                <input
                    className="searchInput"
                    placeholder="Pesquise por palavras-chave"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                
                <button type="submit">Pesquisar</button>
            </form>

        

        <div className="bookItems">
        {
            books.map(book => <BookItem key={book.id} book={book} />)
        }
        </div>
        </div>
            

        </>
    );
}


export default Dashboard;