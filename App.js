import React, { useState, useEffect } from 'react';

// --- Ícones SVG ---
// Usamos ícones SVG embutidos para evitar dependências externas e garantir a renderização.
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.1S5.21 15.66 4.5 16.5z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.89 12.89 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>;
const DollarSignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const MegaphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>;
const AlertTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const CheckSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;

// --- Componente de Card Genérico ---
// Reutilizável para exibir informações de forma consistente.
const InfoCard = ({ title, children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

// --- Componente do Painel Principal (Dashboard) ---
const Dashboard = ({ setActiveView }) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Painel de Controle: Plataforma de Serviços Itajaí</h2>
    <p className="text-lg text-gray-600 mb-8">Bem-vindo ao seu centro de comando. Aqui você pode visualizar e gerenciar o lançamento do seu negócio.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={() => setActiveView('action-plan')}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Plano de Ação (90 Dias)</h3>
          <CheckSquareIcon />
        </div>
        <p>Comece a executar! Acompanhe suas tarefas e veja seu progresso para os próximos 3 meses.</p>
      </div>
      <InfoCard title="Oportunidade de Mercado">
        <p>Itajaí apresenta um crescimento populacional de <strong>44%</strong> e um PIB per capita de <strong>R$ 210.729</strong>, criando um ambiente ideal para serviços.</p>
        <button onClick={() => setActiveView('market-analysis')} className="text-blue-600 font-semibold hover:underline mt-2">Ver análise completa</button>
      </InfoCard>
      <InfoCard title="Modelo de Negócios">
        <p>O modelo <strong>Híbrido (Comissão + Assinatura)</strong> alinha o sucesso da plataforma com o dos profissionais.</p>
        <button onClick={() => setActiveView('business-model')} className="text-blue-600 font-semibold hover:underline mt-2">Detalhes do modelo</button>
      </InfoCard>
    </div>
  </div>
);

// --- Componente de Análise de Mercado ---
const MarketAnalysis = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Análise de Mercado Aprofundada</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Dados Demográficos e Econômicos (Itajaí)">
                <ul className="list-disc list-inside space-y-2">
                    <li>População: <strong>264.054</strong> (Crescimento de 44% em 12 anos).</li>
                    <li>PIB per capita: <strong>R$ 210.729,12</strong> (Muito acima da média estadual).</li>
                    <li>Economia: <strong>2ª maior</strong> de Santa Catarina.</li>
                    <li>Perfil do Consumidor: Busca qualidade e atendimento, não apenas preço.</li>
                </ul>
            </InfoCard>
            <InfoCard title="Análise Competitiva (SWOT)">
                <p><strong>Forças dos Concorrentes:</strong></p>
                <ul className="list-disc list-inside ml-4 mb-2">
                    <li>GetNinjas: Marca forte, alto volume.</li>
                    <li>Triider: Foco em qualidade e garantia.</li>
                </ul>
                <p><strong>Fraquezas a Explorar:</strong></p>
                <ul className="list-disc list-inside ml-4">
                    <li>GetNinjas: Modelo de "moedas" frustrante para profissionais.</li>
                    <li>Triider: Foco menor em mercados secundários como Itajaí.</li>
                    <li>Clique Ajuda: Tecnologia e funcionalidades limitadas.</li>
                </ul>
                 <p className="mt-4 font-semibold text-indigo-700">Nossa Vantagem: Foco hiper-local, confiança e um modelo justo para o profissional.</p>
            </InfoCard>
        </div>
    </div>
);

// --- Componente de MVP e Proposta de Valor ---
const MVP = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proposta de Valor e MVP</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <InfoCard title="Plataforma No-Code Recomendada" className="lg:col-span-1">
                <h4 className="font-bold text-lg text-indigo-600">Adalo</h4>
                <p>É a escolha ideal por seu equilíbrio entre facilidade de uso, flexibilidade e, crucialmente, a capacidade de publicar <strong>aplicativos nativos</strong> para iOS e Android.</p>
            </InfoCard>
            <InfoCard title="MVP: Jornada do Cliente" className="lg:col-span-1">
                <ul className="list-disc list-inside space-y-1">
                    <li>Cadastro Simplificado (Social Login)</li>
                    <li>Busca Intuitiva por Categoria</li>
                    <li>Solicitação de Serviço com Fotos</li>
                    <li>Perfis de Profissionais com Avaliações</li>
                    <li>Chat Integrado</li>
                    <li>Pagamento Seguro na Plataforma</li>
                    <li>Sistema de Avaliação Pós-Serviço</li>
                </ul>
            </InfoCard>
            <InfoCard title="MVP: Jornada do Profissional" className="lg:col-span-1">
                <ul className="list-disc list-inside space-y-1">
                    <li>Cadastro e Processo de Verificação</li>
                    <li>Criação de Perfil com Portfólio</li>
                    <li>Dashboard para Gerenciar Serviços</li>
                    <li>Ferramenta de Orçamento</li>
                    <li>Recebimento de Pagamentos</li>
                    <li>Histórico e Gestão de Reputação</li>
                </ul>
            </InfoCard>
        </div>
    </div>
);

// --- Componente de Estratégia Go-to-Market ---
const GoToMarket = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Estratégia de Go-to-Market</h2>
        <p className="text-lg text-gray-600 mb-8">Resolvendo o problema do "ovo e da galinha" com foco total na aquisição de profissionais de alta qualidade antes do lançamento público.</p>
        <div className="space-y-6">
            <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200"></div>
                <div className="absolute left-[-9px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Fase 1: Pré-Lançamento (3 meses)</h3>
                <p className="text-gray-700"><strong>Meta:</strong> Cadastrar os primeiros 50-100 profissionais de alta qualidade.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Parcerias estratégicas com <strong>Sinduscon</strong> e <strong>ACII</strong>.</li>
                    <li>Busca ativa via imobiliárias e administradoras de condomínio.</li>
                    <li>Oferta de lançamento: 0% de comissão nos 3 primeiros meses.</li>
                </ul>
            </div>
            <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200"></div>
                <div className="absolute left-[-9px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Fase 2: Lançamento (Mês 4)</h3>
                <p className="text-gray-700"><strong>Meta:</strong> Atrair os primeiros 100 clientes.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Marketing digital hiperlocal (Facebook/Instagram Ads).</li>
                    <li>Assessoria de imprensa local para gerar buzz.</li>
                    <li>Ativação das parcerias com imobiliárias para indicar clientes.</li>
                </ul>
            </div>
             <div className="relative pl-8">
                <div className="absolute left-[-9px] top-1 w-5 h-5 bg-indigo-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Fase 3: Pós-Lançamento</h3>
                <p className="text-gray-700"><strong>Meta:</strong> Estimular avaliações e crescimento orgânico.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Campanhas de incentivo para as primeiras avaliações.</li>
                    <li>Coleta de feedback para otimizar o produto.</li>
                    <li>Análise de dados para escalar o marketing.</li>
                </ul>
            </div>
        </div>
    </div>
);

// --- Componente de Modelo de Negócios ---
const BusinessModel = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Modelo de Negócios e Projeções</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard title="Modelo de Monetização Recomendado">
                <h4 className="font-bold text-lg text-indigo-600">Híbrido: Comissão + Assinatura Opcional</h4>
                <p><strong>Comissão Padrão:</strong> 18% sobre o valor do serviço. Alinha o sucesso da plataforma ao do profissional.</p>
                <p className="mt-2"><strong>Plano Pro (Opcional):</strong> R$ 49,90/mês para benefícios como destaque, selo de verificação e comissão reduzida. Gera receita recorrente e fideliza os melhores.</p>
            </InfoCard>
            <InfoCard title="Estrutura de Custos">
                <p><strong>Custos de Lançamento (Únicos):</strong></p>
                <ul className="list-disc list-inside ml-4">
                    <li>Registro da empresa, assessoria contábil.</li>
                </ul>
                <p className="mt-2"><strong>Custos Recorrentes (Mensais):</strong></p>
                <ul className="list-disc list-inside ml-4">
                    <li>Assinatura da plataforma Adalo.</li>
                    <li>Gateway de pagamento (taxas por transação).</li>
                    <li>Marketing digital e assessoria de imprensa.</li>
                    <li>Custos operacionais (software, etc).</li>
                </ul>
            </InfoCard>
        </div>
        <div className="mt-6">
            <InfoCard title="Projeção Financeira Simplificada (Primeiros 12 meses)">
                <p className="mb-4">Estimativa de receita, custos e ponto de equilíbrio. O objetivo é atingir o breakeven (ponto de equilíbrio) no terceiro trimestre de operação.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Métrica</th>
                                <th scope="col" className="px-6 py-3">Trimestre 1</th>
                                <th scope="col" className="px-6 py-3">Trimestre 2</th>
                                <th scope="col" className="px-6 py-3">Trimestre 3</th>
                                <th scope="col" className="px-6 py-3">Trimestre 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">Receita Total</td>
                                <td className="px-6 py-4">R$ 13.500</td>
                                <td className="px-6 py-4">R$ 26.130</td>
                                <td className="px-6 py-4">R$ 46.800</td>
                                <td className="px-6 py-4">R$ 83.213</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                                <td className="px-6 py-4 font-medium">Custos Principais</td>
                                <td className="px-6 py-4">(R$ 30.000)</td>
                                <td className="px-6 py-4">(R$ 35.000)</td>
                                <td className="px-6 py-4">(R$ 40.000)</td>
                                <td className="px-6 py-4">(R$ 50.000)</td>
                            </tr>
                            <tr className="bg-white font-bold">
                                <td className="px-6 py-4">Lucro/Prejuízo</td>
                                <td className="px-6 py-4 text-red-600">(R$ 16.500)</td>
                                <td className="px-6 py-4 text-red-600">(R$ 8.870)</td>
                                <td className="px-6 py-4 text-green-600">R$ 6.800</td>
                                <td className="px-6 py-4 text-green-600">R$ 33.213</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </InfoCard>
        </div>
    </div>
);

// --- Componente de Plano de Marketing ---
const MarketingPlan = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Plano de Marketing Digital Hiperlocal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Redes Sociais">
                <p>Foco em <strong>Instagram e Facebook</strong>. Conteúdo visual mostrando o "antes e depois" de serviços, depoimentos de clientes satisfeitos e apresentação dos profissionais parceiros para humanizar a marca.</p>
            </InfoCard>
            <InfoCard title="SEO Local">
                <p>Otimização máxima do <strong>Google Meu Negócio</strong>. Produção de conteúdo para o blog com palavras-chave como "eletricista em Itajaí", "encanador 24h Balneário Camboriú", "montador de móveis Navegantes".</p>
            </InfoCard>
            <InfoCard title="Parcerias Estratégicas">
                <p>Alianças com <strong>imobiliárias, administradoras de condomínio e lojas de material de construção</strong> para se tornar a solução de serviços recomendada por eles.</p>
            </InfoCard>
        </div>
    </div>
);

// --- Componente de Análise de Riscos ---
const RiskAnalysis = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Análise de Riscos e Plano de Mitigação</h2>
        <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. Baixa adesão de profissionais ou clientes (Problema do "ovo e da galinha")</summary>
                <p className="mt-2 text-gray-600"><strong>Mitigação:</strong> Foco total na aquisição de profissionais na Fase 1 (pré-lançamento) com incentivos agressivos (comissão zero). Lançar para clientes apenas com uma base de oferta sólida.</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. Problemas de qualidade ou segurança com um serviço</summary>
                <p className="mt-2 text-gray-600"><strong>Mitigação:</strong> Processo de verificação rigoroso (documentos, antecedentes). Implementar um sistema de garantia de serviço e ter um processo claro de mediação de conflitos.</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. Concorrência agressiva de players nacionais</summary>
                <p className="mt-2 text-gray-600"><strong>Mitigação:</strong> Focar nos diferenciais que eles não podem replicar: hiperfoco local, construção de comunidade com os profissionais e um modelo de negócio mais justo que atrai os melhores talentos.</p>
            </details>
             <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. Transações ocorrendo fora da plataforma ("desintermediação")</summary>
                <p className="mt-2 text-gray-600"><strong>Mitigação:</strong> Oferecer valor real para manter a transação no app: pagamento seguro, parcelamento para o cliente, garantia do serviço e construção de reputação (avaliações).</p>
            </details>
             <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. Desafios legais ou regulatórios</summary>
                <p className="mt-2 text-gray-600"><strong>Mitigação:</strong> Consultoria jurídica inicial para definir os Termos de Serviço, Política de Privacidade e a relação contratual com os profissionais (deixando claro que são autônomos).</p>
            </details>
        </div>
    </div>
);

// --- Componente do Plano de Ação (Checklist) ---
const ActionPlan = () => {
    // Dados iniciais do checklist
    const initialTasks = {
        sprint1: [
            { id: 1, text: 'Realizar 10-15 entrevistas de validação com profissionais locais.', completed: false },
            { id: 2, text: 'Registrar a empresa (CNPJ) e abrir conta PJ.', completed: false },
            { id: 3, text: 'Iniciar prototipagem do app na Adalo.', completed: false },
            { id: 4, text: 'Agendar primeiras reuniões com Sinduscon e ACII.', completed: false },
        ],
        sprint2: [
            { id: 5, text: 'Finalizar o desenvolvimento do MVP na Adalo.', completed: false },
            { id: 6, text: 'Estruturar o processo de verificação de profissionais (documentos, checagem).', completed: false },
            { id: 7, text: 'Iniciar campanha de onboarding para os primeiros 25 profissionais.', completed: false },
            { id: 8, text: 'Definir estratégia de conteúdo para redes sociais.', completed: false },
        ],
        sprint3: [
            { id: 9, text: 'Onboard e verificar mais 25 profissionais (total 50).', completed: false },
            { id: 10, text: 'Preparar material de marketing para o lançamento (anúncios, press release).', completed: false },
            { id: 11, text: 'Realizar testes finais no aplicativo com profissionais parceiros.', completed: false },
            { id: 12, text: 'Planejar o evento de lançamento e preparar a publicação nas lojas de apps.', completed: false },
        ],
    };

    const [tasks, setTasks] = useState(initialTasks);

    const handleToggle = (sprint, id) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [sprint]: prevTasks[sprint].map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    const allTasks = [...tasks.sprint1, ...tasks.sprint2, ...tasks.sprint3];
    const completedTasks = allTasks.filter(task => task.completed).length;
    const totalTasks = allTasks.length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    const TaskList = ({ title, sprint, taskItems }) => (
        <InfoCard title={title}>
            <div className="space-y-3">
                {taskItems.map(task => (
                    <label key={task.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(sprint, task.id)}
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className={task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                            {task.text}
                        </span>
                    </label>
                ))}
            </div>
        </InfoCard>
    );

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Plano de Ação: Próximos 90 Dias</h2>
            <div className="mb-6">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-indigo-700">Progresso Total</span>
                    <span className="text-sm font-medium text-indigo-700">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-indigo-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <TaskList title="Sprint 1 (Dias 1-30): Validação e Estruturação" sprint="sprint1" taskItems={tasks.sprint1} />
                <TaskList title="Sprint 2 (Dias 31-60): MVP e Aquisição Inicial" sprint="sprint2" taskItems={tasks.sprint2} />
                <TaskList title="Sprint 3 (Dias 61-90): Preparação para Lançamento" sprint="sprint3" taskItems={tasks.sprint3} />
            </div>
        </div>
    );
};


// --- Componente Principal da Aplicação ---
export default function App() {
    const [activeView, setActiveView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Painel de Controle', icon: <HomeIcon /> },
        { id: 'market-analysis', label: 'Análise de Mercado', icon: <TargetIcon /> },
        { id: 'mvp', label: 'MVP e Proposta de Valor', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg> },
        { id: 'go-to-market', label: 'Go-to-Market', icon: <RocketIcon /> },
        { id: 'business-model', label: 'Modelo de Negócios', icon: <DollarSignIcon /> },
        { id: 'marketing-plan', label: 'Plano de Marketing', icon: <MegaphoneIcon /> },
        { id: 'risk-analysis', label: 'Análise de Riscos', icon: <AlertTriangleIcon /> },
        { id: 'action-plan', label: 'Plano de Ação (90 Dias)', icon: <CheckSquareIcon /> },
    ];

    const renderContent = () => {
        switch (activeView) {
            case 'dashboard': return <Dashboard setActiveView={setActiveView} />;
            case 'market-analysis': return <MarketAnalysis />;
            case 'mvp': return <MVP />;
            case 'go-to-market': return <GoToMarket />;
            case 'business-model': return <BusinessModel />;
            case 'marketing-plan': return <MarketingPlan />;
            case 'risk-analysis': return <RiskAnalysis />;
            case 'action-plan': return <ActionPlan />;
            default: return <Dashboard setActiveView={setActiveView} />;
        }
    };

    const NavLink = ({ item }) => (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                setActiveView(item.id);
                setSidebarOpen(false);
            }}
            className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                activeView === item.id 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-700'
            }`}
        >
            <span className="mr-3">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
        </a>
    );

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="flex">
                {/* Sidebar para Desktop */}
                <aside className="hidden lg:block w-72 bg-white h-screen shadow-lg p-4 sticky top-0">
                    <div className="flex items-center mb-8">
                        <div className="bg-indigo-600 p-2 rounded-lg mr-3">
                            <RocketIcon className="text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">Plano Mestre</h1>
                    </div>
                    <nav>
                        {menuItems.map(item => <NavLink key={item.id} item={item} />)}
                    </nav>
                </aside>

                {/* Sidebar para Mobile (Drawer) */}
                 <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>
                <aside className={`fixed top-0 left-0 w-72 bg-white h-full shadow-lg p-4 z-40 transform transition-transform lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                     <div className="flex items-center mb-8">
                        <div className="bg-indigo-600 p-2 rounded-lg mr-3">
                            <RocketIcon className="text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">Plano Mestre</h1>
                    </div>
                    <nav>
                        {menuItems.map(item => <NavLink key={item.id} item={item} />)}
                    </nav>
                </aside>

                {/* Conteúdo Principal */}
                <main className="flex-1 p-4 sm:p-6 lg:p-10">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 mb-4 bg-white rounded-md shadow">
                        <MenuIcon />
                    </button>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
