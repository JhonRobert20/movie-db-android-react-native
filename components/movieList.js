import { View, FlatList } from 'react-native';
import {AnimatedMovieCard} from './movieCard';
import Loader from './loader';

export default function MovieList({movies}) {

    return(
        <View>
            {movies.length === 0 ? (<Loader loading={true} />) :
                (<FlatList
                data={movies}
                keyExtractor={(movie) => movie.id}
                renderItem={({ item, index }) => <AnimatedMovieCard movie={item} index={index} />}
                ItemSeparatorComponent={() => <View style={{height: 50}} />}
                />
            )}  
            
        </View>
    )
};

  