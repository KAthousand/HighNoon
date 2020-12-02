import api from "./apiConfig";

export const getAllScores = async () => {
  const resp = await api.get("/scores");
  return resp.data;
};

export const getOneScore = async (id) => {
  const resp = await api.get(`/scores/${id}`);
  return resp.data;
};

export const postScore = async (scoreData) => {
  const resp = await api.post("/scores", { score: scoreData });
  return resp.data;
};

// export const putScore = async (id, scoreData) => {
//   const resp = await api.put(`/scores/${id}`, {score: scoreData})
// }

export const deleteScore = async (id) => {
  const resp = await api.delete(`/scores/${id}`);
  return resp;
};
