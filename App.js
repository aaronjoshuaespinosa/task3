import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

export default function App() {

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
          <Text style={styles.modalTitleVT}>GAME TASK ENTRY</Text>
            <View style={styles.modalTxtVTCont}>
              <Text style={styles.modalTxtVTBold}>Game: <Text style={styles.modalTxtVT}>{textInputGame}</Text></Text>
              <Text style={styles.modalTxtVTBold}>Goal/Objective: <Text style={styles.modalTxtVT}>{textInputGoal}</Text></Text>
              <Text style={styles.modalTxtVTBold}>Date: <Text style={styles.modalTxtVT}>{textInputDate}</Text></Text>
              <Text style={styles.modalTxtVTBold}>Time: <Text style={styles.modalTxtVT}>{textInputTime}</Text></Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisibleViewTask(!modalVisibleViewTask)} style={styles.modalBtnVT}>
              <Text style={styles.modalBtnVTTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>GAME TIME LISTER</Text>
      </View>

      {/* form */}
      <View style={styles.formContainer}>
        <Text style={styles.note}>Tired of forgetting things that you need to do? HAHA SAME.</Text>

        {/* game */}
        <View style={styles.field}>
          <TextInput
            placeholder="Game"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputGame(value)}
          />
        </View>

        {/* goal */}
        <View style={styles.field}>
          <TextInput
            placeholder="Goal/Objective"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputGoal(value)}
          />
        </View>

        {/* date */}
        <View style={styles.field}>
          <TextInput
            placeholder="Date | Format: 00-00-0000"
            style={styles.fieldPlaceholder}
            mode="outlined"
            maxLength={10}
            onChangeText={(value) => setTextInputDate(value)}
          />
        </View>

        {/* time */}
        <View style={styles.field}>
          <TextInput
            placeholder="Time | Format: 00:00"
            style={styles.fieldPlaceholder}
            mode="outlined"
            maxLength={5}
            onChangeText={(value) => setTextInputTime(value)}
          />
        </View>

        {/* btn */}
        <View style={styles.btns}>
          <TouchableOpacity style={styles.submitBtn} onPress={checkTextInput}>
            <Text style={styles.submitBtnTxt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}