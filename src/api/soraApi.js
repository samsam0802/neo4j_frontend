export const soraGet = async (payload) => {
  const res = await axio.get(`http://neo4jbackend-production-7fb0.up.railway.app`, payload, );

  return res.data;
};