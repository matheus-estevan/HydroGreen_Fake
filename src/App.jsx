import React from 'react'
import './index.css';
import Icon from './assets/logo.svg'
import Arduino from './assets/arduino.svg'
import Bomba from './assets/bomba.svg'
import Led from './assets/led.svg'
import Tds from './assets/tds.svg'
import Fio from './assets/fio.svg'
import Modulo from './assets/modulo.svg'

function App() {
  return (
    <div className="bg-gradient-to-b from-customBlack to-customBlue min-h-screen py-4 px-4 antialised lg:flex justify-center items-center">
      <div className="flex flex-col justify-items-center">
        <header>
          <img src={Icon} className='mb-2' alt="Logo da empresa HydroGreen " />

          <p className='hidden md:block'>Componentes</p>
          <p className='hidden md:block'>Funcionamento</p>
          <p className='hidden md:block'>Referências</p>
          <p className='hidden md:block'>Sobre nós</p>
        </header>
    
        <main>
          <h1 className="text-titleColor text-3xl uppercase font-inter text-center font-black mb-16 md:text-6xl">Componentes</h1>
          
          <div className="arduino">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Arduino Uno</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Arduino} className="bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6  md:w-auto" alt="Imagem de um Arduino" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2">
                  <span className="font-bold">Função:</span> A placa possui como principal componente o microcontrolador, um processador menor que o convencional. Ele executa programas e avalia a qualidade das entradas e saídas, facilitando a comunicação entre o mundo externo e o digital.
                </p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2">
                  <span className="font-bold">Preço:</span> Varia de 40,00 a 150,00 reais.
                </p>
              </div>
            </div>
          </div>


          <div className="bomba">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Bombas de Água Submersível 24V no Uno</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Bomba} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6  md:w-auto' alt="Imagem da bomba" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  A bomba de água submersível 24V é projetada para funcionar submersa e pode ser controlada por um microcontrolador, como o Arduino, para aplicações como irrigação automatizada, aquários, fontes decorativas e outros sistemas que necessitem de movimentação controlada de água.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>Os preços podem variar de aproximadamente R$ 50 a R$ 200 ou mais</p>
              </div>
            </div>
          </div>

          <div className="led">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Iluminalçao LED</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Led} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6  md:w-auto' alt="Imagem de uma lampada de led" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O LED UV em sistemas de cultivo indoor estimula o crescimento e produção de compostos benéficos nas plantas, aumentando sua resistência a pragas e doenças. Com Arduino, é possível controlar com precisão a intensidade e duração da exposição, otimizando o cultivo de acordo com as necessidades das plantas.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>  37,90 reais.</p>
              </div>
            </div>
          </div>

          <div className="TDS">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Sensor TDS Gravity Analog TDS sensor</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Tds} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 md:w-auto max-w-xs' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Os sensores TDS são comumente usados em sistemas de purificação de água, aquários, controle de qualidade da água, agricultura hidropônica e outros campos onde a medição da qualidade da água é importante.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$69,90 reais.</p>
              </div>
            </div>
          </div>

          <div className="Bluetooh">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Módulo Bluetooh</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Modulo} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 md:w-auto max-w-xs' alt="Imagem de um módulo Bluetooh" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O módulo Bluetooth para Arduino permite comunicação sem fio com dispositivos como smartphones e computadores, facilitando troca de dados, controle remoto, transmissão de informações de sensores e recebimento de comandos. Ideal para automação, robótica e dispositivos móveis.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> 13 a 40 reais.</p>
              </div>
            </div>
          </div>

          <div className="Componentes">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Fios, conectores e componentes eletrônicos diversos</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Fio} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 md:w-auto max-w-xs' alt="Imagem de alguns fios" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Eles variam em tipo e tamanho, incluindo jumpers, cabos macho-macho e macho-fêmea, e são essenciais para trocar dados e sinais elétricos entre o Arduino e os dispositivos externos em um projeto eletrônico.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$8 a R$15 reais.</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

export default App