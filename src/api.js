import config from "./config.js";

const { apiBase, endpoints } = config;

async function apiRequest(path, { method = "GET", token, body } = {}) {
  const res = await fetch(`${apiBase}${path}`, {
    method,
    headers: {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return res.json();
}

const statusQuery = (status) =>
  status && status !== "all" ? `?status=${encodeURIComponent(status)}` : "";

// ---- Public ----
export function submitEnquiry(payload) {
  return apiRequest(endpoints.submitEnquiry, { method: "POST", body: payload });
}

// ---- Admin ----
export function login(email, password) {
  return apiRequest(endpoints.login, { method: "POST", body: { email, password } });
}

export function listEnquiries(token, status = "all") {
  return apiRequest(`${endpoints.enquiries}${statusQuery(status)}`, { token });
}

export function setEnquiryStatus(token, id, status) {
  return apiRequest(`${endpoints.enquiries}/${id}`, { method: "PATCH", token, body: { status } });
}

export function deleteEnquiry(token, id) {
  return apiRequest(`${endpoints.enquiries}/${id}`, { method: "DELETE", token });
}

// Export needs the auth header, so fetch the file as a blob and trigger a download.
export async function downloadEnquiriesExcel(token, status = "all") {
  const res = await fetch(`${apiBase}${endpoints.export}${statusQuery(status)}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Export failed. Sign in again and retry.");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `enquiries-${new Date().toISOString().slice(0, 10)}.xlsx`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
