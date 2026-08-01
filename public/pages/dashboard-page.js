import { site, dadosCard } from '../../dados/dadosSite.js';
import { Card } from '../../componentes/card.js';
export function Dashboard() {
    return `
    <div class="mx-auto max-w-7xl p-5 sm:p-8">
          <section class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p class="mb-1 text-sm font-medium text-brand-600">Sexta-feira, 31 de julho</p><h1 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Bom dia, ${site.nomeUsario}! 👋</h1><p class="mt-1 text-sm text-slate-500">Aqui está o resumo do seu funil comercial.</p></div>
            <button class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-50" data-export-leads>Exportar leads</button>
          </section>
          <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores">
           ${dadosCard.map(Card).join('')}
          </section>
           <section class="mt-7 grid gap-7 xl:grid-cols-[1.6fr_1fr]">
           <div data-recente-lead></div>
           <div data-contatos></div>
            </section>
            </div
          `;
}