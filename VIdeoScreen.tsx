import { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video'

const styles = StyleSheet.create({
    styledVideo: {
        flex: 1,
        height: 200,
        width: 400,
    },
    videoContainer: {
        marginTop: 150,
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#000000",
    },
})

export const VideoScreen = () => {
    const [loadUri, setLoadUri] = useState(false)

    return (
        <>
            <Text>You should always be able to see this</Text>
            <ScrollView>
                <View style={styles.videoContainer}>
                    <Video
                        style={styles.styledVideo}
                        source={loadUri ? { uri: 'https://www.sample-videos.com/video321/mp4/480/big_buck_bunny_480p_5mb.mp4' } : undefined}
                        controls
                    />
                </View>
                <Button style={{ borderWidth: 1 }} onPress={() => setLoadUri(true)} title={'Press to load video'}/>
            </ScrollView>
        </>
    )
}
