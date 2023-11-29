import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { usePropaga } from '@propaga/react-native-sdk';
import { PROPAGA_TOKEN, USER_ID } from '@env'

export default function App() {
  const [isPropagaActive, setIsPropagaActive] = useState(false);
  const { 
    startPropaga,
    PropagaPaymentComponent,
    loaded,
    PropagaButton,
   } = usePropaga();

  return (
    <View style={styles.container}>
      {loaded && (
        <PropagaButton
          totalAmount={2000}
          isActive={isPropagaActive}
          cornerStoreId={USER_ID}
          token={PROPAGA_TOKEN}
          onPress={() => {
            setIsPropagaActive(!isPropagaActive);
        }} />
      )}

      <Button title="Pagar" onPress={startPropaga} />

      <PropagaPaymentComponent
        transaction={{
          cornerStoreId: USER_ID,
          products: [{ 
            externalSKU: '123', 
            name: 'Pepsi', 
            quantity: 1 
          }],
          totalAmount: 2001,
          wholesalerTransactionId: 'TRAN-3245',
        }}
        user={{
          phoneNumber: '3121312311',
          firstName: 'John',
          lastNames: 'Doe',
          latitude: '19.44069',
          longitude: '-99.21',
        }}
        config={{
          token: PROPAGA_TOKEN,
        }}
        onSuccessTransaction={(response) => console.log(response)}
        onErrorTransaction={(error) => console.log(error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
