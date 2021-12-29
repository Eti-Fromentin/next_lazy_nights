import React, { useState } from 'react';
import FetchBarcodeProduct from './FetchBarcodeProduct';
import BarcodeScanner from './BarcodeScanner';

import styles from '../styles/BarCodeReader.module.css';

function BarCodeReader() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  const [fetchedProduct, setFetchedProduct] = useState();

  const onDetected = (result) => {
    setResult(result);
  };

  return (
    <div className={styles.BarCodeReader}>
      <h2 className={styles.BarCodeReaderTitle}>How fat is it ?</h2>
      <h2 className={styles.BarCodeReaderh2}>
        In search of a product worthy of your Lazy Nights? <br />
        Try our product scanner by clicking the button below:
      </h2>
      <button
        className={styles.CameraButton}
        onClick={() => {
          setCamera(!camera);
          setResult(null);
          setFetchedProduct(null);
        }}
      >
        {camera ? 'Stop' : 'Scan'}
      </button>
      <div className={styles.BarCodeProductCard}>
        {result && (
          <FetchBarcodeProduct
            setResult={setResult}
            result={result}
            setCamera={setCamera}
            fetchedProduct={fetchedProduct}
            setFetchedProduct={setFetchedProduct}
          />
        )}
      </div>
      <div className={styles.BarCodeReaderContainer}>{camera && <BarcodeScanner onDetected={onDetected} />}</div>
    </div>
  );
}

export default BarCodeReader;
