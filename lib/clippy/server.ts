import supabaseClient from "../supabase/client";

export interface Server {
  id: string;
  joined_at: Date;
}

export const getServers = async (): Promise<Server[]> => {
  const { data, error } = await supabaseClient
    .from("Server")
    .select("id::text, joined_at");

  if (error) {
    throw new Error(error.message);
  }

  return data as Server[];
};
