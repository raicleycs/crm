
export function Card({titulo, valor, detalhes}) {
    return ` <article class="rounded-xl border border-slate-100 bg-white p-5 shadow-card">
    <p class="text-sm font-medium text-slate-500">${titulo}</p>
    <p class="mt-2 text-3xl font-bold" data-metric="activeLeads">${valor}</p>
    <p class="mt-2 text-xs font-medium text-emerald-600">${detalhes}</p>
    </article>`;
}