import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as Permissions from 'expo-permissions';

const AddImageNote = ({navigation}) => {
  const [camera, setCamera] = useState({
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  });

  useEffect(async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    setCamera(prevState => ({ ...prevState, hasCameraPermission: status === 'granted'}));

  }, []);

  if (camera.hasCameraPermission === null) {
    return <View />;
  } else if (camera.hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={camera.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setCamera({
                  type:
                    camera.type === Camera.Constants.Type.back?Camera.Constants.Type.front:Camera.Constants.Type.back,
                });
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}
                Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  }
}

const Container = styled(View)`
  padding: 30px;
`;

export default AddImageNote;
