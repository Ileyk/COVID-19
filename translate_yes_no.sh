# Assumes that input language is English

if [ "$#" -eq 0 ]
then
  echo "Usage: provide the output language you wish among:"
  echo "French (FR)"
  echo "Italian (IT)"
  echo "Spanish (SP)"
  echo "German (DE)"
  echo "Dutch (NL)"
  exit 1
fi

if [ $1 == "FR" ]
then
  mkdir "src_${1}/"
  for i in src_v2/*.ink; do
    file_input=$(echo $i | cut -d'/' -f 2)
    file_input=$(echo $file_input | cut -f 1 -d '.')
    file_out="src_${1}/${file_input}.ink"
    sed "s/Oui/Yes/g" $i > $file_out
    sed -i '' -e "s/Non/No/g" $file_out
  done
else
  echo "Language not implemented yet"
  exit 2
fi
