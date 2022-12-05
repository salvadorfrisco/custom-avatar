import styles from "./index.module.css";

const OrientalEyes = (props: { color: any }) => (
  <div className={styles.OrientalEyes}>
    <svg viewBox="0 0 32 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.44941 1.20001V1.05001C2.71941 0.980006 1.86941 0.930006 0.899414 0.900006C1.26941 1.90001 1.76941 2.73001 2.39941 3.40001C3.09941 4.07001 4.06941 4.58001 5.29941 4.95001C6.59941 5.28001 7.59941 5.45001 8.29941 5.45001C9.02941 5.42001 9.74941 5.40001 10.4494 5.40001L10.8494 5.35001V4.80001C10.4794 4.07001 10.0694 3.52001 9.59941 3.15001C9.52941 3.05001 9.42941 2.97001 9.29941 2.90001C9.19941 3.07001 9.06941 3.23001 8.89941 3.40001C8.22941 4.03001 7.47941 4.35001 6.64941 4.35001C5.81941 4.35001 5.04941 4.03001 4.44941 3.40001C3.77941 2.80001 3.44941 2.07001 3.44941 1.20001ZM31.2494 0.850006C30.3294 0.910006 29.4894 0.980006 28.7494 1.05001C28.7494 1.10001 28.7494 1.15001 28.7494 1.20001C28.7494 2.07001 28.4194 2.80001 27.7494 3.40001C27.1494 4.03001 26.4194 4.35001 25.5494 4.35001C24.6794 4.35001 23.9694 4.03001 23.2994 3.40001C23.1394 3.24001 22.9894 3.05001 22.8494 2.85001C22.7494 2.96001 22.6494 3.04001 22.5494 3.10001C22.1294 3.51001 21.7294 4.08001 21.3494 4.80001L21.2994 5.35001H21.7494C22.4394 5.39001 23.1394 5.40001 23.8494 5.40001C24.5994 5.42001 25.5994 5.26001 26.8494 4.90001C28.1294 4.58001 29.1094 4.06001 29.7994 3.35001C30.4394 2.73001 30.9194 1.90001 31.2494 0.850006Z" fill="white" />
      <path d="M3.4502 1.05V1.2C3.4502 2.07 3.7802 2.8 4.4502 3.4C5.0502 4.03 5.7802 4.35 6.6502 4.35C7.5202 4.35 8.2302 4.03 8.9002 3.4C9.0702 3.23 9.2002 3.07 9.3002 2.9C8.8302 2.57 8.1002 2.18 7.1002 1.75C6.4002 1.45 5.1802 1.22 3.4502 1.05ZM28.7502 1.2C28.7502 1.15 28.7502 1.1 28.7502 1.05C27.0202 1.2 25.8002 1.42 25.1002 1.7C24.1002 2.15 23.3502 2.54 22.8502 2.85C22.9902 3.05 23.1402 3.24 23.3002 3.4C23.9702 4.03 24.7202 4.35 25.5502 4.35C26.3802 4.35 27.1502 4.03 27.7502 3.4C28.4202 2.8 28.7502 2.07 28.7502 1.2Z" fill={props.color} />
      <path d="M0.849805 0.6C0.679805 0.67 0.499805 0.75 0.299805 0.85C0.499805 0.85 0.679805 0.87 0.849805 0.9L0.799805 1.25L0.849805 1.7C1.3198 3.13 2.1198 4.15 3.2498 4.75L5.39981 5.55C6.02981 5.68 6.5198 5.75 6.8498 5.75C8.1498 5.92 9.34981 5.8 10.4498 5.4C9.74981 5.4 9.0298 5.42 8.2998 5.45C7.5998 5.45 6.5998 5.28 5.2998 4.95C4.0698 4.58 3.0998 4.07 2.3998 3.4C1.7698 2.73 1.2698 1.9 0.899805 0.9C1.8698 0.93 2.7198 0.98 3.4498 1.05C5.1798 1.22 6.3998 1.45 7.0998 1.75C8.0998 2.18 8.8298 2.57 9.2998 2.9C9.4298 2.97 9.5298 3.05 9.5998 3.15C10.0698 3.52 10.4798 4.07 10.8498 4.8C10.7498 3.53 10.3698 2.58 9.69981 1.95C9.59981 1.82 9.4698 1.7 9.2998 1.6C8.4298 0.97 7.37981 0.53 6.14981 0.3C5.14981 0.13 4.3298 0.03 3.6998 0C3.5698 0 3.4298 0 3.2998 0L1.7498 0.2C1.4798 0.3 1.1798 0.43 0.849805 0.6V0.6ZM26.0498 0.3C24.8198 0.52 23.7598 0.96 22.8498 1.6C22.7298 1.7 22.5898 1.82 22.4498 1.95C21.8298 2.59 21.4598 3.54 21.3498 4.8C21.7298 4.08 22.1298 3.51 22.5498 3.1C22.6498 3.04 22.7498 2.96 22.8498 2.85C23.3498 2.54 24.0998 2.15 25.0998 1.7C25.7998 1.42 27.0198 1.2 28.7498 1.05C29.4898 0.98 30.3298 0.91 31.2498 0.85C30.9198 1.9 30.4398 2.73 29.7998 3.35C29.1098 4.06 28.1298 4.58 26.8498 4.9C25.5998 5.26 24.5998 5.42 23.8498 5.4C23.1398 5.4 22.4398 5.39 21.7498 5.35C22.8598 5.78 24.0598 5.91 25.3498 5.75C25.6798 5.75 26.1698 5.68 26.7998 5.55L28.0498 5.15L28.9498 4.7C30.0698 4.14 30.8698 3.14 31.3498 1.7L31.3998 1.25L31.3498 0.9V0.85C31.5298 0.85 31.7098 0.85 31.8998 0.85C31.7098 0.76 31.5198 0.68 31.3498 0.6C31.0098 0.44 30.7098 0.31 30.4498 0.2L28.8998 0C28.7798 0 28.6398 0 28.4998 0C27.8698 0.02 27.0498 0.12 26.0498 0.3V0.3Z" fill="black" />
    </svg>
  </div>
);

export default OrientalEyes;
