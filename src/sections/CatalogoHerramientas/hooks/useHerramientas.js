import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export function useHerramientas() {
  const [herramientas, setHerramientas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerHerramientas = async () => {
      const { data, error: supabaseError } = await supabase
        .from("productos")
        .select("*");

      if (supabaseError) {
        setError(supabaseError.message);
      } else {
        setHerramientas(data ?? []);
      }

      setCargando(false);
    };

    obtenerHerramientas();
  }, []);

  return { herramientas, cargando, error };
}
