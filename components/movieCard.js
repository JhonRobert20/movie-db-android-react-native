import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export default function MovieCard({movie}) {
    return(
        <View>
            <Image source={{uri: movie.image}} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.votes}>{movie.vote_average}/10</Text>
            <Text>{movie.overview}</Text>
        </View>
    )
};

export function AnimatedMovieCard({movie, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 100,
            useNativeDriver: true
        }).start()
    }, [opacity, index])
    return (
        <Animated.View style={{opacity}}>
            <MovieCard movie={movie} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "300",
        height: "200",
        display: "flex",
        alignItems: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10
    },
    title: {
        color: "black",
        marginTop: "5",
        fontWeight: "bold"
    },
    votes: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10
    }
  });
  