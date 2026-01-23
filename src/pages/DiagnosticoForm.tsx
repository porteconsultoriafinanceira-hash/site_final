import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustBadges from '@/components/TrustBadges';
import { Plus, Trash2 } from 'lucide-react';

interface LoanData {
  tipoContrato: string;
  valorParcela: string;
  quantidadeParcelas: string;
  parcelasPagas: string;
  valorCredito: string;
  instituicao: string;
}

interface FormErrors {
  nome?: string;
  telefone?: string;
  email?: string;
  loans?: { [key: number]: { [key: string]: string } };
}

const bancos = [
  'Banco do Brasil',
  'Caixa Econômica Federal',
  'Itaú',
  'Bradesco',
  'Santander',
  'Nubank',
  'Banco Inter',
  'C6 Bank',
  'BMG',
  'Pan',
  'Safra',
  'Sicoob',
  'Outro',
];

const DiagnosticoForm = () => {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [loans, setLoans] = useState<LoanData[]>([{
    tipoContrato: '',
    valorParcela: '',
    quantidadeParcelas: '',
    parcelasPagas: '',
    valorCredito: '',
    instituicao: '',
  }]);
  const [errors, setErrors] = useState<FormErrors>({});

  // Máscara de telefone
  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  // Máscara de moeda
  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const amount = parseInt(numbers) / 100;
    if (isNaN(amount)) return '';
    return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatTelefone(e.target.value));
  };

  const handleLoanChange = (index: number, field: keyof LoanData, value: string) => {
    const newLoans = [...loans];
    if (field === 'valorParcela' || field === 'valorCredito') {
      newLoans[index][field] = formatCurrency(value);
    } else if (field === 'quantidadeParcelas' || field === 'parcelasPagas') {
      const num = value.replace(/\D/g, '');
      const numValue = parseInt(num);
      if (num === '' || (numValue >= 0 && numValue <= 180)) {
        newLoans[index][field] = num;
      }
    } else {
      newLoans[index][field] = value;
    }
    setLoans(newLoans);
  };

  const addLoan = () => {
    setLoans([...loans, {
      tipoContrato: '',
      valorParcela: '',
      quantidadeParcelas: '',
      parcelasPagas: '',
      valorCredito: '',
      instituicao: '',
    }]);
  };

  const removeLoan = (index: number) => {
    if (loans.length > 1) {
      setLoans(loans.filter((_, i) => i !== index));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validar nome (mínimo 2 palavras)
    const palavras = nome.trim().split(/\s+/);
    if (palavras.length < 2) {
      newErrors.nome = 'Por favor, insira seu nome completo';
    }
    
    // Validar telefone
    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (telefoneLimpo.length < 10) {
      newErrors.telefone = 'Por favor, insira um telefone válido com DDD';
    }
    
    // Validar email
    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Por favor, insira um e-mail válido';
    }
    
    // Validar empréstimos
    const loanErrors: { [key: number]: { [key: string]: string } } = {};
    loans.forEach((loan, index) => {
      const errors: { [key: string]: string } = {};
      
      if (!loan.tipoContrato) errors.tipoContrato = 'Selecione o tipo de contrato';
      if (!loan.valorParcela) errors.valorParcela = 'Informe o valor da parcela';
      if (!loan.quantidadeParcelas) errors.quantidadeParcelas = 'Informe a quantidade de parcelas';
      if (!loan.parcelasPagas) errors.parcelasPagas = 'Informe as parcelas pagas';
      if (!loan.valorCredito) errors.valorCredito = 'Informe o valor do crédito';
      if (!loan.instituicao) errors.instituicao = 'Informe a instituição bancária';
      
      // Validar parcelas pagas <= quantidade de parcelas
      const qtdParcelas = parseInt(loan.quantidadeParcelas);
      const parcelasPagas = parseInt(loan.parcelasPagas);
      if (!isNaN(qtdParcelas) && !isNaN(parcelasPagas) && parcelasPagas > qtdParcelas) {
        errors.parcelasPagas = 'Não pode ser maior que a quantidade de parcelas';
      }
      
      if (Object.keys(errors).length > 0) {
        loanErrors[index] = errors;
      }
    });
    
    if (Object.keys(loanErrors).length > 0) {
      newErrors.loans = loanErrors;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Salvar dados no localStorage para uso no checkout
      localStorage.setItem('diagnosticoData', JSON.stringify({
        nome,
        telefone,
        email,
        loans,
      }));
      navigate('/checkoutdiagnostico');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cinza-claro">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Card do formulário */}
            <div className="card-custom animate-fade-in">
              {/* Título */}
              <h1 className="font-display font-bold text-xl md:text-2xl text-azul-profundo text-center mb-6">
                Informe seus dados para realizarmos a análise técnica do seu contrato
              </h1>
              
              {/* Selos de confiança */}
              <div className="mb-6">
                <TrustBadges variant="horizontal" size="sm" />
              </div>
              
              {/* Texto de apoio */}
              <div className="bg-cinza-claro rounded-lg p-4 mb-8 text-sm text-cinza-grafite">
                <p className="mb-1">As informações solicitadas são utilizadas exclusivamente para análise do seu contrato.</p>
                <p>Nenhum dado é compartilhado com terceiros.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados pessoais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="md:col-span-2">
                    <label className="label-custom">Nome</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Nome completo"
                      className={`input-custom ${errors.nome ? 'input-error' : ''}`}
                    />
                    {errors.nome && <p className="error-message">{errors.nome}</p>}
                  </div>
                  
                  {/* Telefone */}
                  <div>
                    <label className="label-custom">Número de telefone</label>
                    <input
                      type="tel"
                      value={telefone}
                      onChange={handleTelefoneChange}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      className={`input-custom ${errors.telefone ? 'input-error' : ''}`}
                    />
                    {errors.telefone && <p className="error-message">{errors.telefone}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="label-custom">E-mail</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className={`input-custom ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Empréstimos */}
                {loans.map((loan, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-azul-profundo">
                        Empréstimo {index + 1}
                      </h3>
                      {loans.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLoan(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Tipo de contrato */}
                      <div>
                        <label className="label-custom">Tipo de contrato</label>
                        <select
                          value={loan.tipoContrato}
                          onChange={(e) => handleLoanChange(index, 'tipoContrato', e.target.value)}
                          className={`select-custom ${errors.loans?.[index]?.tipoContrato ? 'input-error' : ''}`}
                        >
                          <option value="">Selecione...</option>
                          <option value="consignado">Empréstimo Consignado</option>
                          <option value="pessoal">Empréstimo Pessoal</option>
                          <option value="financiamento">Financiamento</option>
                        </select>
                        {errors.loans?.[index]?.tipoContrato && (
                          <p className="error-message">{errors.loans[index].tipoContrato}</p>
                        )}
                      </div>
                      
                      {/* Valor da parcela */}
                      <div>
                        <label className="label-custom">Valor da parcela</label>
                        <input
                          type="text"
                          value={loan.valorParcela}
                          onChange={(e) => handleLoanChange(index, 'valorParcela', e.target.value)}
                          placeholder="R$ 0,00"
                          className={`input-custom ${errors.loans?.[index]?.valorParcela ? 'input-error' : ''}`}
                        />
                        {errors.loans?.[index]?.valorParcela && (
                          <p className="error-message">{errors.loans[index].valorParcela}</p>
                        )}
                      </div>
                      
                      {/* Quantidade de parcelas */}
                      <div>
                        <label className="label-custom">Quantidade de parcelas</label>
                        <input
                          type="text"
                          value={loan.quantidadeParcelas}
                          onChange={(e) => handleLoanChange(index, 'quantidadeParcelas', e.target.value)}
                          placeholder="Ex: 48"
                          className={`input-custom ${errors.loans?.[index]?.quantidadeParcelas ? 'input-error' : ''}`}
                        />
                        {errors.loans?.[index]?.quantidadeParcelas && (
                          <p className="error-message">{errors.loans[index].quantidadeParcelas}</p>
                        )}
                      </div>
                      
                      {/* Parcelas pagas */}
                      <div>
                        <label className="label-custom">Quantidade de parcelas pagas</label>
                        <input
                          type="text"
                          value={loan.parcelasPagas}
                          onChange={(e) => handleLoanChange(index, 'parcelasPagas', e.target.value)}
                          placeholder="Ex: 12"
                          className={`input-custom ${errors.loans?.[index]?.parcelasPagas ? 'input-error' : ''}`}
                        />
                        {errors.loans?.[index]?.parcelasPagas && (
                          <p className="error-message">{errors.loans[index].parcelasPagas}</p>
                        )}
                      </div>
                      
                      {/* Valor do crédito */}
                      <div>
                        <label className="label-custom">Valor aproximado do crédito contratado</label>
                        <input
                          type="text"
                          value={loan.valorCredito}
                          onChange={(e) => handleLoanChange(index, 'valorCredito', e.target.value)}
                          placeholder="R$ 0,00"
                          className={`input-custom ${errors.loans?.[index]?.valorCredito ? 'input-error' : ''}`}
                        />
                        {errors.loans?.[index]?.valorCredito && (
                          <p className="error-message">{errors.loans[index].valorCredito}</p>
                        )}
                      </div>
                      
                      {/* Instituição bancária */}
                      <div>
                        <label className="label-custom">Instituição bancária</label>
                        <select
                          value={loan.instituicao}
                          onChange={(e) => handleLoanChange(index, 'instituicao', e.target.value)}
                          className={`select-custom ${errors.loans?.[index]?.instituicao ? 'input-error' : ''}`}
                        >
                          <option value="">Selecione...</option>
                          {bancos.map((banco) => (
                            <option key={banco} value={banco}>{banco}</option>
                          ))}
                        </select>
                        {errors.loans?.[index]?.instituicao && (
                          <p className="error-message">{errors.loans[index].instituicao}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Botão adicionar empréstimo */}
                <button
                  type="button"
                  onClick={addLoan}
                  className="flex items-center gap-2 text-verde-seguranca hover:text-verde-hover font-medium transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Adicionar outro empréstimo
                </button>
                
                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-lg">
                  Receber meu diagnóstico completo
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiagnosticoForm;
