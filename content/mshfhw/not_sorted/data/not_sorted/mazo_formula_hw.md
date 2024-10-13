---
title: "Упрощенная методика оценки эффективности МГРП"
date: 2024-07-03
tags: ["однофазка", "приближенное решение", "Мазо", "ГС"]
math: true

---

## 1. Приток к горизонтальной скважине без ГРП
<div style="text-align: justify;">

<!-- ![Область решения задачи о притоке жидкости к горизонтальной скважине](mazo_formula_hw_domain.jpg) -->
{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/mazo_formula_hw_domain.png" caption="Рис. 1. Область решения задачи о притоке жидкости к горизонтальной скважине" >}}


<p>
Задаче о притоке однофазного флюида к ГС без МГРП. Пласт однородный \( \sigma = 1 \).
Падением давления вдоль ствола пренебрегаем. 
Задача сводится к двумерной в плоскости \(y=y_0 \in \left(0, L\right) \). Плоский 
характер течения нарушается, когда \(y_0\) приближается к концам \(y=0\) и \(y=L\).
В силу симметри достаточно рассмотреть 1/4 поперечного сечения (рис. 1).
</p>

Область фильтрации \(D\) ограничена сверху кровлей пласта, справа--контуром питания, снизу и слева -- 
линиями симметрии и поверхностью скважины \(\gamma\).

$$
\triangle p = 0 \;\;\; в \;\;\;\;\;\; D = [0, 1] \times [0, H] / \gamma    
\qquad (1.1)
$$

$$
\sigma \dfrac{\partial p}{\partial n} = 0 \;\;\;\; при \;\;\;\; x = 0, \; z = 0, \; z = H 
\qquad (1.2)
$$

$$
p = 0 \;\;\;\; при \;\;\; \left(x, z\right) \in \gamma; \;\; p = 1 \;\;\;\; при \;\;\; x = H 
\qquad (1.3)
$$

После того как задача (1.1) -- (1.3) решена, можно подсчитать удельный \(q\) и полный \(Q\) дебиты скважины по формулам

$$
q = \int_{\gamma} \dfrac{\partial p}{\partial n} d\gamma, \;\;\;\; Q = \int_0^L q(y) dy. \;\;\;\;\;\;\;\;\;\;\;\;     
$$

<!-- $$
\;\;\;\;\;\;\;\;\;\;\;\;     (1)
$$ -->



#### Приближенное решение задачи о притоке к ГС
Задача (1.1) -- (1.3) для однородного пласта (\(\sigma \equiv 1\)) описывает течение в узкой (\(H > 1\)) полосе 
единичной длины. На границах \(z=0, \; z = H\) заданы условия симметрии, а отличие от плоско-параллельного течения обусловлено только граничным условием Дирихле \(p=0\) на четверти окружности \(\gamma\) в левом нижнем углу области (рис. 1).

Утверждение: во всей полосе справа \(x \geq H\) течение плоско-параллельное, а в окрестности \(\gamma \) -- плоско-радиальное.
Расход жидкости целиком определяется плоско-параллельным течением и равен

$$
q = \dfrac{1 - p_{\Gamma}}{1 - H},
\qquad (1.4)
$$
где \(p_{\Gamma}\) -- подлежащее определению давления при \(x = H\).
Далее предполагается, что на окружности \( \Gamma = \left\{ (x, z) \in \sqrt{x^2 + z^2} = H \right\} \) 
давление близко к постоянному \(p_{\Gamma}\). Тогда в подобласти, ограниченной окружностями \(\gamma\) и \(\Gamma\)
и лучами \(x=0\) и \(z = 0\), фильтрация будет плоско-радиальной

$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dp}{dr}\right) = 0, \;\;\;\; r_w \leq r \leq H;
$$
$$
p = 0 \;\;\;при \;\;\; r=r_w; \;\;\; p=p_{\Gamma} \;\;\;\; при \;\;\;r=H.
$$
Ее решение (см. [подробнее]( {{< relref "radial_laplace_1d" >}}))
$$
p(r)= p_{\Gamma}\dfrac{\ln(r /r_w)}{\ln(H / r_w)}
\qquad(1.5)
$$

скорость притока
$$
u_n = \left.\dfrac{dp}{dr}\right|_{r=r_w} = \dfrac{p_{\Gamma}}{r_w \ln(H/r_w)},
$$
тогда дебит \(q\) получим, умножив скорость на четверть боковой поверхности цилиндра радиуса \(r_w\)
$$
q = \theta \dfrac{\pi r_w}{2}u_n = \theta \dfrac{\pi p_{\Gamma}}{2\ln(H/r_w)}
\qquad (1.6)
$$
где \(\theta\) -- форм фактор (поправочный коэффициент).

Приравняв значения \(q\) из (1.4) и (1.6), найдем
$$
p_{\Gamma} = \dfrac{1}{1+a}, \;\;
a = \dfrac{\theta \pi \left(1-H\right)}{2 \ln(H/r_w)}; \;\;
\qquad (1.7)
$$
Тогда из (1.6), подставив \(p_{\Gamma}\) из (1.7), получим
$$
q = \dfrac{a}{\left(1-H\right)(1+a)}, \;\;\; a = \dfrac{\theta \pi \left(1-H\right)}{2 \ln(H/r_w)}; \;\;
\qquad (1.8)
$$
Давление на дуге единичной окружности \(\Gamma\), полученное при численном решении задачи, отличается от константы \(p_{\Gamma}\) в приближенной модели не более
чем на 10%; а отклонение форм-фактора \(\theta\) от единицы не превышает 5%.

Плоско-радиальная симметрия фильтрационного течения нарушается вблизи
концов ствола скважины, для которых характерным является приток из внешней
полусферы (см. рис. 2).

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/mazo_formula_hw_domain_edge.png" caption="Рис. 2. Схема концевого участка горизонтальной скважины" >}}

В области, ограниченной двумя полусферами радиусов \(r_w\) и \(H\), характер
течения подчиняется сферической симметрии и описывается уравнениями

$$
\dfrac{1}{r^2}\dfrac{d}{dr}\left(r^2 \dfrac{dp}{dr}\right) = 0, \;\;\;\; r_w \leq r \leq H;
$$
$$
p = 0 \;\;\;при \;\;\; r=r_w; \;\;\; p=p_{\Gamma} \;\;\;\; при \;\;\;r=H,
$$
где \(p_{\Gamma}\) – подлежащее определению давление на внешнем контуре. Решение данной
задачи имеет вид (см. [подробнее]( {{< relref "spheric_laplace_1d" >}}))

$$
p(r) = \dfrac{p_{\Gamma} H (r - r_w)}{(H - r_w)}\dfrac{1}{r}
$$
скорость притока

$$
u_n = \left.\dfrac{dp}{dr}\right|_{r=r_w} = \left.\dfrac{p_{\Gamma} H r_w}{(H-r_w)r^2}\right|_{r=r_w} = 
\dfrac{p_{\Gamma} H}{(H-r_w)r_w},
$$
тогда дебит \(q_s\) скважины
$$
q_s = \theta \dfrac{\pi r_w^2}{2}u_n = \theta \dfrac{\pi p_{\Gamma} H r_w}{2(H - r_w)}
\qquad(1.9)
$$

Величина флюида из четверти внешнего цилиндра определяется плоско-радиальным течением 
и по аналогии с (1.6) равна
$$
q_s = \dfrac{\pi (1 - p_{\Gamma})}{2 \ln(1/H)} = \dfrac{\pi (p_{\Gamma}-1)}{2 \ln(H)}
\qquad (1.10)
$$

Приравняв значения расходов (1.9) и (1.10), найдем искомое давление \(p_{\Gamma}\) :
$$
p_{\Gamma} = \dfrac{a}{a-\theta H r_w \ln(H)}, \;\;\; a = (H - r_w), \;\;\; 
\qquad(1.11)
$$
Тогда из (1.9), подставив \(p_{\Gamma}\) из (1.11), получим
$$
q_s = \dfrac{\theta \pi a H r_w}{2a(a - \theta H r_w \ln(H))} , \;\;\; a = (H - r_w), \;\;\; 
\qquad(1.12)
$$

Таким образом, полный дебит \(Q\) горизонтальной скважины (в 1/4 поперечного сечения) складывается из
дебита \(q\) основной части ствола (1.8) и двух дебитов \(q_s\) концевых участков (1.12):
<!-- В действительности смена симметрии течения в окрестности концов скважины происходит плавно, 
поэтому можно принять следующую формулу для полного дебита: -->
$$
% Q = L(1 - \alpha) \cdot q + L \cdot \alpha \cdot q_s,
Q = L \cdot q + 2 \cdot q_s.
\qquad (1.12)
$$
<!-- где \(\alpha\) – параметр, который выбирается так, чтобы вычисленный по формуле (1.10)
дебит \(Q\) совпадал с полученным численно при решении трехмерной задачи. -->


## 2. Приток к скважине с МГРП

Перейдем к рассмотрению общего случая горизонтальной скважины с многостадийным гидравлическим 
разрывом пласта. Выберем один фрагмент \(D\) четверти области, ограниченный двумя вертикальными 
плоскостями, одна из которых проходит посредине трещины ГРП, а другая отстоит от нее на 
расстоянии \(d\) и проходит посредине между трещинами (см. рис. 3).

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/mazo_formula_mshfhw_domain.png" caption="Рис. 3.  Область решения задачи о притоке жидкости к горизонтальной скважине с трансверсальной трещиной ГРП" >}}

Трехмерная задача для давления \(p\) в коллекторе \(D\) для однородного пласта с учетом плоской симметрии имеет вид
$$
\begin{array}l
\triangle p = 0; \\
\end{array}
\qquad(2.1)
$$
с граничными условиями 
$$
\begin{array}l
p|_{\gamma} = 0; \;\; p=1 \;\; при \;\; x=1; \\ \\ 
\dfrac{\partial p}{\partial n} = 0 \;\;\; при \;\; x = 0; \;\;\;
y = d; \;\; y=0, \;\;\; x>h; \;\; z = 0, H; \\ \\
p = p_f \;\; при \;\; y=0, \;\; x \leq h.
\end{array}
\qquad(2.2)
$$

Задача для давления \(p_f\) в трещине ГРП
$$
\triangle p_f + \dfrac{1}{M}\left.\dfrac{\partial p}{\partial y}\right|_{y = 0} = 0,
\qquad(2.3)
$$
с граничными условиями 
$$
\begin{array}l
\left. p_f\right|_{\gamma} = 0; \\ \\
\dfrac{\partial p}{\partial n} = 0 \;\;\; при \;\;\; x = 0, h; \;\; z = 0, H;
\end{array}
\qquad(2.4)
$$

При конечных \(M\) приближенное решение задачи можно получить, положив
\(h = H\) и «снеся» граничные условия изоляции (2.4) на фиктивную поверхность \(\Gamma\) –
цилиндр единичного радиуса. В этом случае вместо (2.3), (2.4) получим радиально-симметричную задачу

$$
\begin{array}l
\dfrac{1}{r}\dfrac{\partial}{\partial r} \left(r \dfrac{\partial p_f}{\partial r}\right) + 
\dfrac{1}{M}\left.\dfrac{\partial p}{\partial y}\right|_{y = 0} = 0, \;\; r_w \leq r \leq H, \\ \\
p_f = 0 \;\;\; при \;\;\; r = r_w; \\ \\ 
\dfrac{\partial p_f}{\partial r} = 0 \;\;\; при \;\;\; r = H
\end{array}
\qquad(2.5)
$$

Второй член уравнения (2.5) аппроксимируем выражением
$$
\dfrac{\partial p}{\partial y} \approx \dfrac{1}{d} \left(p_d - p_f\right),
\qquad(2.6)
$$

где \(p_d(r)\) – давлениe в пласте в плоскости симметрии \(y = d\), разделяющей сегменты
ГС. Считаем, что эта функция имеет тот же вид, что и в задаче без трещины ГРП (1.5):
$$
p_d(r) = p_{\Gamma}\dfrac{\ln(r/r_w)}{\ln(H/r_w)}
\qquad(2.7)
$$

однако константа \(p_{\Gamma}\) здесь другая и подлежит определению. Подставив (2.6), (2.7)
в (2.5), получим линейное уравнение
$$
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dp_f}{dr}\right) - \dfrac{p_f}{Md} = p_{\Gamma}\dfrac{1}{Md}\dfrac{\ln(r/r_w)}{\ln(H/r_w)}
\qquad(2.8)
$$

Его решение ищется в виде
$$
p_f = p_{\Gamma}p_1,
\qquad(2.9)
$$
где функция \(p_1\) – решение задачи
$$
\begin{array}l
\dfrac{1}{r}\dfrac{d}{dr}\left(r \dfrac{dp_1}{dr}\right) - \dfrac{p_1}{Md} = \dfrac{1}{Md}\dfrac{\ln(r/r_w)}{\ln(H/r_w)}, \;\;\;
r_w \leq r \leq H,
\\ \\
p_1(r_w) = 0, \;\; \dfrac{dp_1}{dr}(H) = 0.
\end{array}
\qquad(2.10)
$$

Задача (2.10) решается численно. Полный приток к трещине в пределах рассматриваемого сегмента ГС будет, 
согласно (2.6), равен
$$
Q_f = \dfrac{\theta_f \pi}{2d} \operatorname{\Large\int}_{r_w}^{H} \left(p_d - p_f\right)r dr,
\qquad(2.11)
$$

где \(p_d (r)\) определено формулой (2.7), \(p_f (r)\) – формулой (29), а \(\theta_f\) – форм-фактор.
Подставив указанные формулы в (2.10), получим
$$
\displaystyle
\begin{array}l
Q_f = p_{\Gamma} \theta_f \left(I_d - I_1\right), \\ \\
I_d  = \dfrac{\pi}{2d}\operatorname{\Large\int}_{r_w}^{H} r \dfrac{\ln(r/r_w)}{\ln(H/r_w)} = 
\dfrac{\pi}{8d \ln(H/r_w)} \left(r_w^2+2H^2\ln(H/r_w)-H^2\right);
 \\ \\ 
I_1 = \dfrac{\pi}{2d}\operatorname{\Large\int}_{r_w}^{H} p_1(r)rdr.
\end{array}
\qquad(2.12)
$$




<details>
<summary>Вычисление \(I_d\) в Maxima</summary>

```python
integrate(r * log(r / rw) / log(H/rw), r, rw, H);
"Is "rw*(rw-H)" positive, negative or zero?"negative
;
(%o6)	(((H^2*log(H/rw))/(2*rw^2)-H^2/(4*rw^2)+1/4)*rw^2)/log(H/rw)
(%i8)	ratsimp((((H^2*log(H/rw))/(2*rw^2)-H^2/(4*rw^2)+1/4)*rw^2)/log(H/rw));
(%o8)	(rw^2+2*H^2*log(H/rw)-H^2)/(4*log(H/rw))
```
</details>

Осталось найти константу \(p_{\Gamma}\) – давление на фиктивном контуре \({\Gamma}\). Для этого
составим балансовое уравнение из (2.12) и притока \(Q_{\gamma}\) к скважине
$$
Q = Q_{\gamma} + Q_f = Q_{\gamma} + p_{\Gamma} \theta_f \left(I_d - I_1\right),
\qquad(2.13)
$$
откуда
$$
p_{\Gamma} = \dfrac{Q - Q_{\gamma}}{\theta_f \left(I_d - I_1\right)}
\qquad(2.14)
$$

{{< figure src="/mshfhw/not_sorted/data/not_sorted/images/mazo_formula_hw_q_qgamma_explain.png" caption="Рис. 4. Схема притока к скважине с МГРП" >}}


Так \(Q\) с учетом (1.4) и (1.10) будет  (см. рис. 4)
$$
\displaystyle
\begin{array}l
Q = Q_{G_1} + Q_{G_2} \\ \\ 
Q_{G_1} = \dfrac{(1 - p_{\Gamma})d}{(1 - H)}, \;\;\; Q_{G_2} = \dfrac{\pi (p_{\Gamma}-1)}{2 \ln(H)}
\end{array}
\qquad(2.15)
$$
а \(Q_{\gamma}\) с учетом (1.6) и (1.9)
$$
\displaystyle
\begin{array}l
Q_{\gamma} = Q_{{\gamma}_1} + Q_{\gamma_2} \\ \\ 
Q_{\gamma_1} = \dfrac{\pi \theta d p_{\Gamma} }{2\ln(H/r_w)} \;\;\;
Q_{\gamma_2} = \dfrac{\pi \theta H r_w p_{\Gamma} }{2(H - r_w)}
% Q_{\gamma} = \dfrac{\pi d p_{\Gamma} \theta}{2\ln(H/r_w)}, \;\;\; Q__{\gamma_2} = \dfrac{\pi (p_{\Gamma}-1)}{2 \ln(H)}
\end{array}
\qquad(2.16)
$$

Определим \(p_{\Gamma}\) из (2.14) с учетом (2.15) и (2.16)

Будем все делать шаг за шагом. 

1. Выражение для \(Q\)
$$
\displaystyle
\begin{array}l
Q = Q_{G_1} + Q_{G_2} = \dfrac{d - d p_{\Gamma}}{1-H} + \dfrac{\pi p_{\Gamma} - \pi}{2\ln \left(H\right)} = \\ \\ 
= \dfrac{2d\ln \left(H\right) - 2d\ln \left(H\right) p_{\Gamma} + p_{\Gamma} \pi \left(1-H\right) - \pi \left(1-H\right)}{\left(1-H\right) 2\ln \left(H\right)} = \\ \\
= p_{\Gamma}\dfrac{\pi \left(1-H\right) - 2d\ln \left(H\right)}{\left(1-H\right) 2\ln \left(H\right)} + \dfrac{2d\ln \left(H\right) - \pi \left(1-H\right)}{\left(1-H\right) 2\ln \left(H\right)} = \\ \\ 
= p_{\Gamma}\dfrac{\pi \left(1-H\right) - 2d\ln \left(H\right)}{\left(1-H\right) 2\ln \left(H\right)} - \dfrac{\pi \left(1-H\right) - 2d\ln \left(H\right)}{\left(1-H\right) 2\ln \left(H\right)} \\ \\
Q = A \cdot p_{\Gamma} - A, \;\;\; A = \dfrac{\pi \left(1-H\right) - 2d\ln \left(H\right)}{\left(1-H\right) 2\ln \left(H\right)}.
\end{array}
\qquad(2.17)
$$

2. Выражение для \(Q_{\gamma}\)
$$
\displaystyle
\begin{array}l
Q_{\gamma} = Q_{{\gamma}_1} + Q_{\gamma_2} =  \dfrac{\pi \theta d p_{\Gamma} }{2\ln(H/r_w)} + 
\dfrac{\pi \theta H r_w p_{\Gamma} }{2(H - r_w)} = \\ \\
= \pi \theta p_{\Gamma}\left[\dfrac{d}{2\ln(H/r_w)} + 
\dfrac{H r_w }{2(H - r_w)} \right] \\ \\ 
Q_{\gamma} = \pi \theta p_{\Gamma} B, \;\;\; B = \dfrac{d}{2\ln(H/r_w)} + \dfrac{H r_w }{2(H - r_w)}
\end{array}
\qquad(2.18)
$$

Тогда уравнение для \(p_{\Gamma}\) с учетом (2.14), (2.17) и (2.18)
$$
\displaystyle
\begin{array}l
p_{\Gamma} = \dfrac{A \cdot p_{\Gamma} - A - \pi \theta p_{\Gamma} B}{\theta_f \left(I_d - I_1\right)} \\ \\ 
p_{\Gamma} = \dfrac{-A}{\theta_f \left(I_d - I_1\right) - A + \pi \theta B}
\end{array}
\qquad(2.19)
$$

<details>
<summary>Вычисление \(p_{\Gamma}\) в Maxima</summary>

```python
(%i272)	q_G1(pg)  :=  (1-pg) * d / (1 -H)$
	q_G2(pg) := %pi * (pg - 1)/(2 * log(H))$
	q(pg) := q_G1(pg) + q_G2(pg)$
	q_gam1(pg)  := (%pi * d * pg * theta) / (2 * log(H/rw))$
	q_gam2(pg) := (%pi *  pg * H * rw * theta) / (2 * (H - rw))$
	q_gam(pg) := q_gam1(pg) + q_gam2(pg)$
	solve(pg = (q(pg) - q_gam(pg)) /(theta_f * (I_d - I_1)), pg);
	
(%o272)	[pg=-(((2*log(H)*d+%pi*H-%pi)*log(H/rw)*rw+(-(2*H*log(H)*d)-%pi*H^2+%pi*H)*log(H/rw))/((((2*H-2)*log(H)*I_d+(2-2*H)*log(H)*I_1)*log(H/rw)*rw+((2*H-2*H^2)*log(H)*I_d+(2*H^2-2*H)*log(H)*I_1)*log(H/rw))*theta_f+
(((%pi*H-%pi*H^2)*log(H)*log(H/rw)+(%pi*H-%pi)*log(H)*d)*rw+(%pi*H-%pi*H^2)*log(H)*d)*theta+(-(2*log(H)*d)-%pi*H+%pi)*log(H/rw)*rw+(2*H*log(H)*d+%pi*H^2-%pi*H)*log(H/rw)))]
```
</details>

### Замечания

1. Если считать, что \(M \rightarrow \infty \), тогда \(p_f = 0\) из (2.3) с учетом граничных условий (2.4). Следовательно, 
\(I_1\) = 0.
2. Если нет притока к торцам, то \(Q_{G_2} = 0\) и \(Q_{\gamma_2} = 0\). Значит в формуле (2.19) \(A = \dfrac{d}{H-1}\), 
\(B = \dfrac{d}{2\ln(H/r_w)}\)

### Некоторые выкладки

</div>
