import { navegacao } from '../dados/navegacao.js';
import {site} from '../dados/dadosSite.js';

function NavItem({ link, roteador, ativo }) {
    const itemAtivo = ativo ? 'bg-brand-50 text-brand-700' : 'text-slate-500 hover:bg-slate-50';
    return `<a class="flex items-center gap-3 rounded-lg bg-brand-50 px-3 py-2.5 text-brand-700" ${itemAtivo} href="${roteador}">${link}</a>`;
}
export function Sidebar(rotaAtiva =  '#/dashboard'){
    const link = navegacao.map((item) => NavItem({...item, ativo: item.roteador === rotaAtiva})).join('');
    return `
    <aside class="hidden border-r border-slate-200 bg-white p-5 lg:block">
        <a href="#" class="mb-10 flex items-center gap-3 px-2 text-xl font-bold text-slate-900">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">${site.logo}</span>
          ${site.nome}
        </a>

        <nav class="space-y-1 text-sm font-medium" aria-label="Navegação principal">
          ${link}
        </nav>

        <div class="mt-10 border-t border-slate-100 pt-6">
          <div class="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div class="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">${site.avatar}</div>
            <div class="min-w-0"><p class="truncate text-sm font-semibold">${site.nomeUsario}</p><p class="text-xs text-slate-500">Administradora</p></div>
          </div>
        </div>
      </aside>
    `;
}