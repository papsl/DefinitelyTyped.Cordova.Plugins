// Type definitions for Apache Cordova plugins: BarcodeScanner
// Plugin location: https://github.com/wildabeast/BarcodeScanner
// Definitions by: Peter A. Pirc (peter@4pi.si)
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Licensed under the MIT license.

interface BarcodeScannerResult {
    text: string;
    format: string;
    cancelled: string;
}

interface BarcodeScannerSuccessCallback {
    (result: BarcodeScannerResult)
}

interface BarcodeScannerSuccessError {
    (error: string);
}


interface BarcodeScanner {
    scan(successCallback: BarcodeScannerSuccessCallback
        , errorCallback: BarcodeScannerSuccessError
        , options: any
        ): any
}

interface CordovaPlugins {
    barcodeScanner: BarcodeScanner;
}

interface Cordova {
    plugins: CordovaPlugins;
}
