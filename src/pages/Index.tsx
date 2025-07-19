import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: "Электроизмерительные приборы",
      description: "Разработка и производство высокоточных средств измерения электрических и магнитных полей",
      icon: "Zap"
    },
    {
      title: "Тренажерные комплексы",
      description: "Создание специализированных тренажерных систем для профессиональной подготовки",
      icon: "Monitor"
    },
    {
      title: "Измерительные системы",
      description: "Проектирование измерительно-вычислительных комплексов нового поколения",
      icon: "BarChart3"
    },
    {
      title: "Метрологическое обеспечение",
      description: "Поверка и калибровка средств измерений в аккредитованной лаборатории",
      icon: "CheckCircle"
    }
  ];

  const news = [
    {
      title: "Итоги голосования акционеров",
      date: "15 июля 2025",
      description: "Отчет об итогах голосования на годовом общем собрании акционеров ОАО \"НИИ Электромера\", состоявшемся"
    },
    {
      title: "Сообщение о проведении годового заседания общего собрания акционеров",
      date: "10 июля 2025", 
      description: "Проведении годового заседания общего собрания акционеров"
    },
    {
      title: "Итоги голосования акционеров",
      date: "5 июля 2025",
      description: "Отчет об итогах голосования на годовом общем собрании акционеров ОАО \"НИИ Электромера\", состоявшемся"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Icon name="Microscope" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">НИИ Электромера</h1>
                <p className="text-sm text-slate-600">Научно-исследовательский институт</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Главная</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">О институте</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#news" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Новости</a>
              <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>

            <Button className="md:hidden" variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="md:text-6xl text-slate-800 leading-tight py-0 mx-0 my-[5px] text-center px-[27px] font-semibold text-5xl">НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ ИНСТИТУТ
ЭЛЕКТРОИЗМЕРИТЕЛЬНЫХ ПРИБОРОВ</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Ведущий научно-исследовательский институт по разработке и производству 
              высокоточных электроизмерительных приборов и измерительных систем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Icon name="Beaker" className="mr-2" size={20} />
                Наши разработки
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                <Icon name="FileText" className="mr-2" size={20} />
                Документация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">О институте</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              НИИ Электромера - ведущее научное учреждение с более чем 50-летней историей разработки 
              инновационных решений в области электроизмерительной техники. Наши специалисты создают 
              приборы и системы, которые обеспечивают точность и надежность измерений в самых 
              требовательных условиях.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">50+ лет опыта</h3>
                <p className="text-slate-600">Полувековая история инноваций и разработок</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">200+ специалистов</h3>
                <p className="text-slate-600">Команда высококвалифицированных инженеров</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">1000+ разработок</h3>
                <p className="text-slate-600">Широкая линейка приборов и систем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Основные направления деятельности</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Полный цикл разработки, производства и обслуживания высокотехнологичного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-100 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-slate-800">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Новости и события</h2>
            <p className="text-lg text-slate-600">Последние достижения и разработки института</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{item.date}</span>
                    <Icon name="Calendar" className="text-blue-500" size={16} />
                  </div>
                  <CardTitle className="text-slate-800 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Сертификаты и лицензии</h2>
            <p className="text-lg text-slate-600">Подтверждение качества и соответствия стандартам</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2015", type: "Система менеджмента качества" },
              { name: "ISO 14001", type: "Экологический менеджмент" },
              { name: "ГОСТ Р", type: "Российские стандарты" },
              { name: "Росаккредитация", type: "Аккредитация лаборатории" }
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-green-100">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-slate-800 text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {cert.type}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-slate-300">Свяжитесь с нами для сотрудничества</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-slate-300">г. Москва, ул. Научная, д. 15</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">info@electrometer.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Icon name="Microscope" className="text-white" size={20} />
            </div>
            <span className="text-lg font-semibold">НИИ Электромера</span>
          </div>
          <p className="text-sm">
            © 2025 Научно-исследовательский институт электроизмерительных приборов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}