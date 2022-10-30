import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, StatusBar, Linking } from 'react-native';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

export default function App() {

  const ads = () => {
    const adLink = 'https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community&hl=en&gl=US';
    Linking.openURL(adLink);
  }

  // modals useStates
  const [modalVisibleAlert, setModalVisibleAlert] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  const [modalVisibleViewTask, setModalVisibleViewTask] = useState(false);

  // forms useStates
  const [textInputGame, setTextInputGame] = useState('');
  const [textInputGoal, setTextInputGoal] = useState('');
  const [textInputDate, setTextInputDate] = useState('');
  const [textInputTime, setTextInputTime] = useState('');

  // form func
  const checkTextInput = () => {
    if (!textInputGame.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputGoal.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputDate.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputTime.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    setModalVisibleSuccess(!modalVisibleSuccess)
  };

  // view task
  const viewTask = () => {
    setModalVisibleViewTask(!modalVisibleViewTask)
  }

  // view
  return (
    <View style={styles.mainContainer}>
      <StatusBar />

      {/* success modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleSuccess}
        onRequestClose={() => {
          setModalVisibleSuccess(!modalVisibleSuccess);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitleSuccess}>SUCCESS</Text>
            <Image style={styles.modalImg} source={require('./assets/check.png')} />
            <Text style={styles.modalTxt}>Your game task has been recorded successfully!</Text>

            <TouchableOpacity onPress={() => setModalVisibleViewTask(!modalVisibleViewTask)} style={styles.modalBtnSuccess}>
              <Text style={styles.modalBtnSuccessTxt}>View Task</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisibleSuccess(!modalVisibleSuccess)} style={styles.modalBtnSuccess}>
              <Text style={styles.modalBtnSuccessTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* alert modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleAlert}
        onRequestClose={() => {
          setModalVisibleAlert(!modalVisibleAlert);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitleAlert}>ALERT</Text>
            <Image style={styles.modalImg} source={require('./assets/alert.png')} />
            <Text style={styles.modalTxt}>Please fill in all input fields.</Text>
            <TouchableOpacity onPress={() => setModalVisibleAlert(!modalVisibleAlert)} style={styles.modalBtnAlert}>
              <Text style={styles.modalBtnAlertTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* view task modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleViewTask}
        onRequestClose={() => {
          setModalVisibleViewTask(!modalVisibleViewTask);
        }}
      >
        <View style={styles.modalContainerVT}>
          <View style={styles.modalVT}>
            <View style={styles.headerContainer}>
              <Image style={styles.headerImg} source={require('./assets/taskHeaderBG.png')} />
              <Text style={styles.modalTitleVT}>GAME TASK ENTRY</Text>
            </View>
            <View style={styles.formContainer}>
            <Text style={styles.note}>Trivia: Mas malaki pa Tiny ni Saksa kay Roshan!!!</Text>
              <Text style={styles.modalTxtVTBold}>GAME:  <Text style={styles.modalTxtVT}>{textInputGame}</Text></Text>
              <Text style={styles.modalTxtVTBold}>GOAL:  <Text style={styles.modalTxtVT}>{textInputGoal}</Text></Text>
              <Text style={styles.modalTxtVTBold}>DATE:  <Text style={styles.modalTxtVT}>{textInputDate}</Text></Text>
              <Text style={styles.modalTxtVTBold}>TIME:  <Text style={styles.modalTxtVT}>{textInputTime}</Text></Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisibleViewTask(!modalVisibleViewTask)} style={styles.modalBtnVT}>
              <Text style={styles.modalBtnVTTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* header */}
      <View style={styles.headerContainer}>
        <Image style={styles.headerImg} source={require('./assets/headerBG.png')} />
        <Text style={styles.headerTxt}>GAME TIME LISTER</Text>
      </View>

      {/* form */}
      <View style={styles.formContainer}>
        <Text style={styles.note}>Tired of forgetting things that you need to do? HAHA SAME.</Text>

        {/* game */}
        <View style={styles.field}>
          <Text style={styles.tiTitle}>Game</Text>
          <TextInput
            placeholder="Valorant"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputGame(value)}
          />
        </View>

        {/* goal */}
        <View style={styles.field}>
          <Text style={styles.tiTitle}>Objective</Text>
          <TextInput
            placeholder="Achieve Radiant in 1 hour"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputGoal(value)}
          />
        </View>

        <View style={styles.duoFieldContainer}>
          {/* date */}
          <View style={styles.duoField1}>
            <Text style={styles.tiTitle}>Date</Text>
            <TextInput
              placeholder="01/01/1969"
              style={styles.fieldPlaceholder}
              mode="outlined"
              maxLength={10}
              onChangeText={(value) => setTextInputDate(value)}
            />
          </View>

          {/* time */}
          <View style={styles.duoField2}>
            <Text style={styles.tiTitle}>Time</Text>
            <TextInput
              placeholder="00:00"
              style={styles.fieldPlaceholder}
              mode="outlined"
              maxLength={5}
              onChangeText={(value) => setTextInputTime(value)}
            />
          </View>
        </View>

        {/* btn */}
        <View style={styles.btns}>
          <TouchableOpacity style={styles.submitBtn} onPress={checkTextInput}>
            <Text style={styles.submitBtnTxt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.ads} onPress={ads}>
        <Image style={styles.adsImg} source={require('./assets/ads.jpg')} />
      </TouchableOpacity>
    </View>
  );
}