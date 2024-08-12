import React from 'react'
import './index.css';

import Icon from './assets/logo.svg'
import Arduino from './assets/arduino.svg'
import Bomba from './assets/bomba.svg'
import Led from './assets/led.svg'
import Fio from './assets/fio.svg'
import Modulo from './assets/modulo.svg'
import Bomba2 from './assets/bomba2.svg'
import Motor from './assets/passo.svg'
import Servo from './assets/servo.svg'
import Sensor from './assets/sensor.svg'
import Rele from './assets/rele.svg'
import Menu from './assets/menu.svg'

function App() {
  return (
    <div className="bg-gradient-to-b from-customBlack to-customBlue min-h-screen py-4 px-4 antialised lg:flex justify-center items-center">
      <div className="flex flex-col justify-items-center">
        <header className="flex items-center justify-between mb-20">
          <img src={Icon} alt="Logo da empresa HydroGreen" />
          <img src={Menu} alt="Imagem de um menu Hamburger" className="md:hidden ml-auto"/>
          
          <div className="flex space-x-4">
            <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Componentes</p>
            <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase" t>Funcionamento</p>
            <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Referências</p>
            <p className="hidden md:block text-titleColor font-semibold text-base font-inter uppercase">Sobre nós</p>
          </div>
        </header>
    
        <main>
          <h1 className="text-titleColor text-3xl uppercase font-inter text-center font-black mb-16 md:text-6xl">Componentes</h1>
          
          <div className="arduino">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Arduino Mega</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Arduino} className="bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64" alt="Imagem de um Arduino" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2">
                  <span className="font-bold">Função:</span> O Arduino Mega é uma placa de microcontrolador projetada para projetos mais complexos e que exigem mais recursos do que as placas Arduino padrão, como o Uno. Ele possui um número maior de pinos digitais e analógicos, mais memória (RAM, flash e EEPROM), e um microcontrolador mais potente (ATmega2560)
                </p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2">
                  <span className="font-bold">Preço:</span> R$ 219,90
                </p>
              </div>
            </div>
          </div>

          <div className="bomba">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Bombas de Água Submersível</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Bomba} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem da bomba" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  A bomba de água submersível 24V é projetada para funcionar submersa e pode ser controlada por um microcontrolador, como o Arduino, para aplicações como irrigação automatizada, aquários, fontes decorativas e outros sistemas que necessitem de movimentação controlada de água.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>R$ 11,90</p>
              </div>
            </div>
          </div>

          <div className="bomba2">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Bombas de Água</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Bomba2} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem da bomba" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  O LED UV em sistemas de cultivo indoor estimula o crescimento e produção de compostos benéficos nas plantas, aumentando sua resistência a pragas e doenças. Com Arduino, é possível controlar com precisão a intensidade e duração da exposição, otimizando o cultivo de acordo com as necessidades das plantas.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>R$ 50</p>
              </div>
            </div>
          </div>

          <div className="Sonico">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Sensor Ultrassônico</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Sensor} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de uma lampada de led" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Mede a distância entre o sensor e um objeto utilizando ondas ultrassonoras.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>R$ 11,90.</p>
              </div>
            </div>
          </div>

          <div className="Componentes">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Fios, conectores e componentes eletrônicos diversos</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Fio} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de alguns fios" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Eles variam em tipo e tamanho, incluindo jumpers, cabos macho-macho e macho-fêmea, e são essenciais para trocar dados e sinais elétricos entre o Arduino e os dispositivos externos em um projeto eletrônico.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$ 25.</p>
              </div>
            </div>
          </div>

          <div className="Bluetooh">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Módulo Bluetooh</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Modulo} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de um módulo Bluetooh" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O módulo Bluetooth para Arduino permite comunicação sem fio com dispositivos como smartphones e computadores, facilitando troca de dados, controle remoto, transmissão de informações de sensores e recebimento de comandos. Ideal para automação, robótica e dispositivos móveis.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> 13 a 40 reais.</p>
              </div>
            </div>
          </div>

          <div className="Relé">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Relé</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Rele} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de um módulo Bluetooh" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> Atua como um interruptor controlado eletronicamente, permitindo que o Arduino controle dispositivos de alta potência ou alta tensão, como lâmpadas, motores e eletrodomésticos, que não podem ser diretamente alimentados pelos pinos do Arduino devido à sua baixa corrente e tensão.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$ 12,90.</p>
              </div>
            </div>
          </div>

          <div className="led">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Iluminalçao LED</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Led} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de uma lampada de led" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O LED UV em sistemas de cultivo indoor estimula o crescimento e produção de compostos benéficos nas plantas, aumentando sua resistência a pragas e doenças. Com Arduino, é possível controlar com precisão a intensidade e duração da exposição, otimizando o cultivo de acordo com as necessidades das plantas.</p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span>  37,90 reais.</p>
              </div>
            </div>
          </div>

          <div className="Motor de Passo">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Motor de passo</h2>
            <div className="flex flex-col md:flex-row md:items-center">
              <img src={Motor} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span> O motor de passo no Arduino é utilizado para mover objetos com precisão controlada em passos incrementais. Diferente dos motores tradicionais, ele permite que o eixo gire em ângulos específicos e controlados, o que é ideal para aplicações que requerem posicionamento exato, como impressoras 3D, máquinas CNC, robótica e outros sistemas automatizados.
                </p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$ 18,90 reais.</p>
              </div>
            </div>
          </div>

          <div className="Servo Motor">
            <h2 className="text-titleColor font-inter text-center text-lg font-bold mb-4">Servo Motor</h2>
            <div className="flex flex-col md:flex-row-reverse md:items-center">
              <img src={Servo} className='bg-titleColor p-3 rounded-lg mx-auto mb-6 md:p-6 md:mb-0 md:mr-6 w-full max-w-xs md:w-64' alt="Imagem de um sensor TDS" />
              <div className="texto">
                <p className="text-white font-inter font-normal text-sm mb-4 md:text-base md:mb-2"> <span className='font-bold'>Função:</span>  O servo motor no Arduino é utilizado para controlar o movimento de um eixo em posições precisas, geralmente dentro de um intervalo de 0 a 180 graus.
                </p>
                <p className="text-white font-inter font-normal text-sm mb-16 md:text-base md:mb-2"> <span className='font-bold'>Preço:</span> R$ 17,90 reais.</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

export default App