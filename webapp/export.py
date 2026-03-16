import argparse
import json

parser = argparse.ArgumentParser()
parser.add_argument('--format', default='json')
args = parser.parse_args()

if args.format == 'json':
    print(json.dumps({'status': 'ok'}))
elif args.format == 'csv':
    print('id,name')
else:
    print('unsupported')
