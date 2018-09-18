import api from "../api";

const getGHUserProfileInfo = user => {
    return user;
};

export const updateGHUserProfile = data => ({ user }) => ({
  data: { ...user, ...data }
});

export const pushDataToServer = (data) =>
    api.post(data);

export const fetchGHUserProfile = url => (
  fetch(url)
    .then(res => res.json())
    .then(getGHUserProfileInfo)
);
