import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { styles } from './styles';

export default function App() {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  // buttons useStates
  const [modalVisibleAlert, setModalVisibleAlert] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);

  // forms useStates
  const [textInputGame, setTextInputGame] = useState('');
  const [textInputGoal, setTextInputGoal] = useState('');

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

    setModalVisibleSuccess(!modalVisibleSuccess)
  };

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
            mode="flat"
            onChangeText={(value) => setTextInputGame(value)}
          />
        </View>

        {/* goal */}
        <View style={styles.field}>
          <TextInput
            placeholder="Goal/Objective"
            style={styles.fieldPlaceholder}
            mode="flat"
            onChangeText={(value) => setTextInputGoal(value)}
          />
        </View>

        <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

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