---
title: 'Вычисление дебита по границе с помощью ТТ'
date: 2024-10-13
tags: ["дебит", "трубки тока"]
math: true
---

Пусть имеется некоторая область на плоскости \(Oxy\), на одной границе которой задано постоянное давление \(p_w\), 
а на другой -- \(p_r\).
Остальные границы непроницаемы. 

Допустим мы смогли определить трубки тока (ТТ), длина которых \(\lambda(x)\) это длина трубки тока (ТТ), 
а \(\omega(l, x)\) -- относительная ширина трубки тока.

### Как нам определить дебит на одной из границ, на которой задано давление?

Для простоты будем считать, что 
$$
p_w = 0, \;\; p_r=1
\qquad(1)
$$

Ширина трубки тока 
$$
W (l, x) = \omega(l, x) \cdot W_0
$$

Дебит будет вычисляться по формуле 
$$
Q = \int_{x_0}^{x_1} u(x) dx
\qquad(1*)
$$

#### Как определить \(u(x)\)?

Рассмотрим интеграл 
$$
\int_{0}^{\lambda} dp = p(\lambda) - p(0) = 1.
\qquad(2)
$$
Он равен 1 в силу г.у (1).

С другой стороны умножим и разделим (2) на \(dl\)
$$
\int_{0}^{\lambda} \dfrac{dp}{dl}dl
\qquad(3)
$$

Известно, что 
$$
u = -\dfrac{dp}{dl},
$$
тогда (3) будет
$$
\int_{0}^{\lambda} \dfrac{dp}{dl}dl = - \int_{0}^{\lambda} u(l)dl
\qquad(4)
$$

Пусть \(Q_0\) это расход, через данную границу, то 
скорость в точке 
$$
u(l, x) = \dfrac{Q_0}{W(l, x)}
\qquad(5)
$$
а 
$$
u(x) = \dfrac{Q_0}{W_0}
$$

Подставим (5) в (4)
$$
\int_{0}^{\lambda} \dfrac{dp}{dl}dl = - \int_{0}^{\lambda} u(l)dl = 
-\int_{0}^{\lambda} \dfrac{Q_0}{\omega(l, x) \cdot W_0} dl=
-\dfrac{Q_0}{W_0}\int_{0}^{\lambda} \dfrac{dl}{\omega(l, x)}=
-u(x)\int_{0}^{\lambda} \dfrac{dl}{\omega(l, x)}
\qquad(6)
$$

Тогда из (2) и (6) будем иметь
$$
\displaystyle
u(x) = \dfrac{1}{\int_{0}^{\lambda} \dfrac{dl}{\omega(l, x)}}
$$

Рассмоторим интеграл
$$
\int_{0}^{\lambda} Q dl
\qquad(7)
$$

С одной стороны 
$$
\int_{0}^{\lambda} Q dl = Q \cdot \lambda
\qquad(8)
$$

с другой стороны
$$
\int_{0}^{\lambda} Q dl = \int_{0}^{\lambda} u W dl =
-\int_{0}^{\lambda} W(p, x) dp = - W_0 \int_{0}^{\lambda} \omega(\phi, x) d\phi
\qquad(9)
$$

Из (8) и (9)
$$
\dfrac{Q}{W_0} = -\dfrac{1}{\lambda} \int_{0}^{\lambda} \omega(\phi, x) d\phi
\Rightarrow u(x) = -\dfrac{1}{\lambda(x)} \int_{0}^{\lambda} \omega(\phi, x) d\phi
$$

Зная \(u(x)\) мы можем вычислить дебит по (1*).