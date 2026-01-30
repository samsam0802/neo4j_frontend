export const soraGet = async (payload) => {
  const res = await axio.get(`neo4jbackend-production-7fb0.up.railway.app`, payload, config);

  return res.data;
};