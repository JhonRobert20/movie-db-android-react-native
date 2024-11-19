import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieList from './movieList';
import {getBestMovies} from "../lib/moviedb";


export default function MainComponent() {
    const insets = useSafeAreaInsets();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getBestMovies().then((moviesData) => setMovies(moviesData));
    }, [])

    return(
        <View style={{paddingBottom: insets.bottom, paddingTop: insets.top, paddingHorizontal: 10}}>
            <View style={{height: 30}} />
            <MovieList movies={movies} />
            <View style={{height: 20}} />
        </View>
    )
};

  