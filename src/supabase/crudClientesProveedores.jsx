import Swal from "sweetalert2";
import { supabase } from "../index";
const tabla = "clientes_proveedores";
export async function InsertarClientesProveedores(p) {
  // Agregar parámetros vacíos para mantener compatibilidad con la función RPC existente
  // Generar valores únicos para evitar duplicados en campos opcionales
  const paramsWithDefaults = {
    ...p,
    _identificador_nacional: p._identificador_nacional || `unique_${Date.now()}_nacional`,
    _identificador_fiscal: p._identificador_fiscal || `unique_${Date.now()}_fiscal`,
  };
  const { error, data } = await supabase.rpc("insertarclientesproveedores", paramsWithDefaults);
  if (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
      text: error.message,
    });
    return;
  }
  return data;
}

export async function MostrarClientesProveedores(p) {
  const { data, error } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .eq("tipo", p.tipo);
  if (error) {
    return;
  }
  return data;
}
export async function BuscarClientesProveedores(p) {
  const { data, error } = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", p.id_empresa)
    .eq("tipo", p.tipo)
    .ilike("nombres", "%"+p.buscador+"%");
  if (error) {
    return;
  }
  return data;
}
export async function EliminarClientesProveedores(p) {
  const { error } = await supabase.from(tabla).delete().eq("id", p.id);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    return;
  }
}
export async function EditarClientesProveedores(p) {
  // Agregar parámetros vacíos para mantener compatibilidad con la función RPC existente
  const paramsWithDefaults = {
    ...p,
    _identificador_nacional: p._identificador_nacional || `unique_${Date.now()}_nacional`,
    _identificador_fiscal: p._identificador_fiscal || `unique_${Date.now()}_fiscal`,
  };
  const { error } = await supabase.rpc("editarclientesproveedores", paramsWithDefaults);
  if (error) {
    Swal.fire({
      icon: "error",
      title: error.message,
      text: error.message,
    });
    return;
  }
}


