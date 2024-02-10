import axiosInstance from "./axiosInstance";

const apiModule = {
  addToDocs: async (joinerIds) => {
    const url = "/api/manage/docs/add";
    try {
      const response = await axiosInstance.post(url, { joinerIds });
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  fetchDocsResult: async () => {
    const url = "/api/manage/docs/result";
    const tracks = ["all", "pm", "fe", "be"];

    try {
      const responses = await Promise.all(
        tracks.map((track) => axiosInstance.get(url, { params: { track } }))
      );
      const data = responses.map((response) => response.data.result);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteDocsResult: async (joinerIds) => {
    const url = "/api/manage/docs/del";

    try {
      const response = await axiosInstance.delete(url, { data: { joinerIds } });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  fetchInterviewResults: async () => {
    const url = "/api/manage/interview/result";
    const tracks = ["all", "pm", "fe", "be"];

    try {
      const responses = await Promise.all(
        tracks.map((track) => axiosInstance.get(url, { params: { track } }))
      );
      const data = responses.map((response) => response.data.result);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },

  addInterview: async (joinerIds) => {
    const url = "/api/manage/interview/add";
    try {
      const response = await axiosInstance.post(url, { joinerIds });
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteInterview: async (checkedItems) => {
    const url = "/api/manage/interview/del";
    const data = { joinerIds: checkedItems };

    try {
      await axiosInstance.delete(url, { data });
      console.log("면접 삭제 성공", data);
      return true;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

  fetchQuestions: async () => {
    const url = "/api/manage/docs/quest";
    const year = "2024";
    const tracks = ["common", "pm", "fe", "be"];

    try {
      const responses = await Promise.all(
        tracks.map((track) =>
          axiosInstance.get(url, { params: { year, track } })
        )
      );
      const data = responses.map((response) => response.data.result);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },

  fetchDocumentDetail: async (joinerId) => {
    const url = `/api/recruit/docs/${joinerId}`;
    try {
      const response = await axiosInstance.get(url);
      return response.data.result;
    } catch (err) {
      throw new Error(err);
    }
  },

  fetchInterviewTime: async (joinerId) => {
    const url = `/api/manage/interviewtime/${joinerId}`;
    try {
      const response = await axiosInstance.get(url);
      console.log(response.data.result);
      return response.data.result;
    } catch (err) {
      throw new Error(err);
    }
  },

  saveInterviewTime: async ({ interviewDate, interviewTime, joinerId }) => {
    const url = "/api/manage/interviewtime";
    try {
      const response = await axiosInstance.post(url, {
        interviewDate,
        interviewTime,
        joinerId,
      });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default apiModule;
