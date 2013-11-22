import sys

for m in range(0, 2):
	n = raw_input()

	for i in range(0, int(n)):
		print "\x11" + str(m) + ": " + raw_input() + "\x11"
		#sys.stdout.flush()