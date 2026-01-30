export const soraGet = async () => {
  const res = await axio.get(`https://neo4jbackend-production-7fb0.up.railway.app`);

  return res.data;
};