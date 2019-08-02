import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera, Permissions, Video } from 'expo';
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.camera = undefined
        this.state = { permissionsGranted: false, bcolor: 'red', dataVideo: null, recording : true }
        this.takeFilm = this.takeFilm.bind(this)
    }

    async componentWillMount() {
        let cameraResponse = await Permissions.askAsync(Permissions.CAMERA)
        if (cameraResponse.status == 'granted') {
            let audioResponse = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
            if (audioResponse.status == 'granted') {
                this.setState({ permissionsGranted: true });
            }
        }
    }

     async takeFilm() {
        const options = {
            quality: 0.5,
            fixOrientation: true,
            forceUpOrientation: true,
            videoOrientation: 1,
            deviceOrientation: 1,
            mute: true,
        }
        console.log('đaaaa');
            this.setState({ recording : false});
            let data = await this.camera.recordAsync(options);
            
            this.setState({ dataVideo : data.uri});
        
    }
    stopRecord() {
        this.setState({ recording : true});
        this.camera.stopRecording();
    }

    render() {
        console.log(this.state.dataVideo);
        if (!this.state.permissionsGranted) {
            return <View><Text>Camera permissions not granted</Text></View>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, height : '60%' }}>
                        <Camera ref={ref => this.camera = ref} style={{ flex: 1}} >
                        </Camera>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: this.state.bcolor, flex: 0.3,height: 50 }}>
                                { this.state.recording ?  <Button title="Record" onPress={this.takeFilm.bind(this)} /> :
                                <Button title="StopRecord" onPress={this.stopRecord.bind(this)} /> }
                            </TouchableOpacity>
                    <Video
                        source={{ uri: this.state.dataVideo }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 300 }}
                    />
                </View>)
        }
    }
}