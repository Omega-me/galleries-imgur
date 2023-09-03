import http from './httpService';

const get = async () => {
  return await http.get('/gallery.json');
};

const TutorialService = {
  get,
};
export default TutorialService;
