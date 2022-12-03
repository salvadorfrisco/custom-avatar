import styles from "./index.module.css";

const Eyes = (props: { color: any }) => (
  <div className={styles.Eyes}>
    <svg viewBox='0 0 30 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.20038 2.65001C9.03038 2.42001 8.85038 2.20001 8.65038 2.00001C7.88038 1.23001 6.97038 0.850006 5.90038 0.850006C4.83038 0.850006 3.92038 1.23001 3.15038 2.00001C2.38038 2.77001 2.02038 3.68001 2.05038 4.75001C2.02038 5.22001 2.08038 5.67001 2.25038 6.10001C2.42038 6.53001 2.67038 6.93001 3.00038 7.30001C4.10038 7.43001 5.17038 7.88001 6.20038 8.65001C7.13038 8.58001 7.95038 8.20001 8.65038 7.50001C9.05038 7.07001 9.35038 6.60001 9.55038 6.10001C9.72038 5.67001 9.80038 5.22001 9.80038 4.75001C9.80038 3.98001 9.60038 3.28001 9.20038 2.65001ZM5.35038 3.35001C5.72038 3.08001 6.13038 2.95001 6.60038 2.95001C7.20038 2.95001 7.72038 3.17001 8.15038 3.60001C8.58038 4.03001 8.80038 4.55001 8.80038 5.15001V5.20001C8.80038 5.52001 8.73038 5.82001 8.60038 6.10001C8.47038 6.30001 8.32038 6.50001 8.15038 6.70001C8.02038 6.83001 7.87038 6.95001 7.70038 7.05001C7.37038 7.22001 7.00038 7.32001 6.60038 7.35001C6.00038 7.32001 5.50038 7.10001 5.10038 6.70001C4.90038 6.50001 4.75038 6.30001 4.65038 6.10001C4.52038 5.80001 4.45038 5.48001 4.45038 5.15001C4.45038 4.55001 4.67038 4.03001 5.10038 3.60001C5.17038 3.50001 5.25038 3.42001 5.35038 3.35001ZM21.2504 2.00001C21.0504 2.20001 20.8804 2.42001 20.7504 2.65001C20.3204 3.28001 20.1204 3.98001 20.1504 4.75001C20.1204 5.22001 20.1804 5.67001 20.3504 6.10001C20.5504 6.60001 20.8504 7.07001 21.2504 7.50001C21.9504 8.20001 22.7804 8.58001 23.7504 8.65001C24.7504 7.88001 25.8204 7.43001 26.9504 7.30001C27.2504 6.93001 27.4804 6.53001 27.6504 6.10001C27.8204 5.67001 27.9004 5.22001 27.9004 4.75001C27.9004 3.68001 27.5204 2.77001 26.7504 2.00001C25.9804 1.23001 25.0704 0.850006 24.0004 0.850006C22.9304 0.850006 22.0204 1.23001 21.2504 2.00001ZM21.3504 4.10001C21.4704 3.92001 21.6004 3.75001 21.7504 3.60001C22.1804 3.17001 22.7004 2.95001 23.3004 2.95001C23.9004 2.95001 24.4204 3.17001 24.8504 3.60001C25.2504 4.03001 25.4704 4.55001 25.5004 5.15001C25.4704 5.40001 25.4204 5.63001 25.3504 5.85001L25.3004 6.05001L25.2504 6.10001C25.1504 6.30001 25.0204 6.50001 24.8504 6.70001C24.4204 7.10001 23.9004 7.32001 23.3004 7.35001C22.7004 7.32001 22.1804 7.10001 21.7504 6.70001C21.5804 6.50001 21.4504 6.30001 21.3504 6.10001C21.1804 5.80001 21.1004 5.48001 21.1004 5.15001C21.1004 4.82001 21.1704 4.53001 21.3004 4.30001L21.3504 4.10001Z'
          fill='white'
        />
        <path
          d='M6.60019 3C6.13019 3 5.72019 3.12 5.35019 3.35C5.25019 3.42 5.17019 3.5 5.10019 3.6C4.67019 4.03 4.4502 4.55 4.4502 5.15C4.4502 5.48 4.5202 5.8 4.6502 6.1C4.7502 6.3 4.90019 6.5 5.10019 6.7C5.50019 7.1 6.00019 7.32 6.60019 7.35C7.00019 7.32 7.3702 7.22 7.7002 7.05C7.8302 6.95 7.97019 6.83 8.10019 6.7C8.30019 6.5 8.45019 6.3 8.55019 6.1C8.68019 5.83 8.77019 5.53 8.80019 5.2V5.15C8.76019 4.54 8.52019 4.04 8.10019 3.65C7.67019 3.22 7.17019 3 6.60019 3V3ZM21.7502 3.65C21.6002 3.77 21.4702 3.93 21.3502 4.1L21.3002 4.3C21.1702 4.53 21.1002 4.82 21.1002 5.15C21.1002 5.48 21.1802 5.8 21.3502 6.1C21.4502 6.3 21.5802 6.5 21.7502 6.7C22.1802 7.1 22.7002 7.32 23.3002 7.35C23.9002 7.32 24.4202 7.1 24.8502 6.7C25.0202 6.5 25.1502 6.3 25.2502 6.1L25.3002 6.05L25.3502 5.85C25.4202 5.64 25.4502 5.42 25.4502 5.2C25.4502 4.57 25.2502 4.05 24.8502 3.65C24.4202 3.22 23.9002 3 23.3002 3C22.7002 3 22.1802 3.22 21.7502 3.65Z'
          fill={props.color}
        />
        <path
          d='M2.35 1.2C1.52 2.03 1.1 3.03 1.1 4.2C1.1 4.9 1.25 5.53 1.55 6.1C1.75 6.47 2.02 6.82 2.35 7.15L2.45 7.25C1.82 7.22 1.17 7.28 0.5 7.45L6.35 8.75C6.28 8.68 6.23 8.65 6.2 8.65C5.17 7.88 4.1 7.43 3 7.3C2.67 6.93 2.42 6.53 2.25 6.1C2.08 5.67 2.02 5.22 2.05 4.75C2.02 3.68 2.38 2.77 3.15 2C3.92 1.23 4.83 0.85 5.9 0.85C6.97 0.85 7.88 1.23 8.65 2C8.85 2.2 9.03 2.42 9.2 2.65C8.97 2.12 8.65 1.63 8.25 1.2C7.42 0.4 6.43 0 5.3 0C4.17 0 3.15 0.4 2.35 1.2ZM20.75 2.65C20.88 2.42 21.05 2.2 21.25 2C22.02 1.23 22.93 0.85 24 0.85C25.07 0.85 25.98 1.23 26.75 2C27.52 2.77 27.9 3.68 27.9 4.75C27.9 5.22 27.82 5.67 27.65 6.1C27.48 6.53 27.25 6.93 26.95 7.3C25.82 7.43 24.75 7.88 23.75 8.65C23.68 8.65 23.63 8.68 23.6 8.75L29.45 7.45C28.78 7.28 28.13 7.22 27.5 7.25C27.5 7.22 27.53 7.18 27.6 7.15C27.9 6.82 28.15 6.47 28.35 6.1C28.65 5.53 28.82 4.9 28.85 4.2C28.82 3.03 28.4 2.03 27.6 1.2C26.77 0.4 25.78 0 24.65 0C23.52 0 22.5 0.4 21.7 1.2C21.27 1.63 20.95 2.12 20.75 2.65V2.65Z'
          fill='black'
        />
      </svg>
  </div>
);

export default Eyes;
