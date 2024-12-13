// server.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.text()); // text/plain 요청을 처리하기 위해 사용
app.use(express.json()); // JSON 요청을 처리하기 위해 사용

let data = { message: '여러분 화이팅!' };

// 메시지 가져오기
app.get('/', (req, res) => {
  res.status(200).json(data);
});

// 메시지 업데이트하기
app.put('/', (req, res) => {
  data.message = req.body;
  res.status(200).send(`업데이트된 데이터: ${req.body}`);
});

// 메시지 삭제하기
app.delete('/', (req, res) => {
  data = {};
  res.status(200).send('데이터가 삭제되었습니다.');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
