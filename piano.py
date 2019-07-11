#importando funções da biblioteca
from pyautogui import position,pixelMatchesColor,click
from time import sleep


#criando lista de coordenadas
lis_c = []

#função que vai pedir as coordenadas
def pedirCoord():
	input("Aperte enter para começar a verificação das coordenadas")
	sleep(3)
	
	#for para pegar a posição do mouse e armazenar
	for i in range(1,5):
		sleep(1)
		mou = position()
		
		lis_c.append(mou[0])
		print(f"Posição: {mou}")

	pos_y = position()[1]
	lis_c.append(pos_y)
	
	


pedirCoord()

#colocando a coordenada y numa variavel para facilitar o uso
y = lis_c[4]

#clicando na primeira tecla
click(lis_c[0], y)

#loop infinito que verifica cada posição x
#pra ver se tem uma tecla
#se tiver: clica
while True:
	for x in lis_c[0:4]:
		if (pixelMatchesColor(x, y, (0, 0, 0))):
			click(x, y)
			